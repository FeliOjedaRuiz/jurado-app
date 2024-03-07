const Event = require("../models/event.model");
const User = require("../models/event.model");

module.exports.create = (req, res, next) => {
  if (req.body) {
    req.body.admin = req.user.id;
  }
  Event.create(req.body)
    .then((event) => {
      res.status(201).json(event);
    })
    .catch(next);
};

module.exports.listAdmin = (req, res, next) => {
  Event.find({ admin: req.user.id })
    .populate("groups")
    .then((events) => {
      res.json(events);
    })
    .catch(next);
};

module.exports.listJury = (req, res, next) => {
  Event.find({ juries: { $in: req.user.id } })
    .then((events) => {
      res.json(events);
    })
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Event.findById(req.event.id)
    .then((event) => {
      res.json(event);
    })
    .catch();
};

module.exports.delete = (req, res, next) => {
  Event.deleteOne({ _id: req.event.id })
    .then(() => res.status(204).send())
    .catch(next);
};

module.exports.update = (req, res, next) => {
  Object.assign(req.event, req.body);
  req.event
    .save()
    .then((event) => res.json(event))
    .catch(next);
};
