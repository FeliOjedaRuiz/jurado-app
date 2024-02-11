const Event = require("../models/event.model");
const User = require("../models/event.model");

module.exports.create = (req, res, next) => {
  Event.create(req.body)
    .then((event) => res.status(201).json(event))
    .catch(next);
};

module.exports.listAdmin = (req, res, next) => {
  User.find(req.user.id)
    .populate("adminEvents")
    .then((user) => {
      res.json(user.adminEvents);
    })
    .catch(next);
};

module.exports.listJury = (req, res, next) => {
  User.find(req.user.id)
    .populate("juryEvents")
    .then((user) => {
      res.json(user.juryEvents);
    })
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Event.findById(req.params.id)
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
