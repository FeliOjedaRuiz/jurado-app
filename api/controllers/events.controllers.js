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

module.exports.listAdminEvents = (req, res, next) => {
  Event.find({ admin: req.user.id })
    .populate("groups")
    .then((events) => {
      res.json(events);
    })
    .catch(next);
};

module.exports.listJuryEvents = (req, res, next) => {
  Event.find({ juries: { $in: req.user.id } })
    .populate("groups")
    .then((events) => {
      res.json(events);
    })
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Event.findById(req.event.id)
    .populate("admin")
    .populate("groups")
    .populate("juries")
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

module.exports.enableVoting = (req, res, next) => {
  Object.assign(req.event, req.body);
  req.event
    .save()
    .then((event) => res.json(event))
    .catch(next);
};

module.exports.updateJuries = (req, res, next) => {
  let preJuries = [];
  preJuries = req.event.juries;
  Event.findByIdAndUpdate(req.event.id, {
    juries: [...preJuries, req.newJury.id],
  })
    .then((newEvent) => res.status(201).json(newEvent))
    .catch(next);
};
