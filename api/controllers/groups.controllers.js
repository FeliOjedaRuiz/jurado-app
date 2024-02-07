const Group = require("../models/group.model");
const Event = require("../models/event.model");

module.exports.create = (req, res, next) => {
  Group.create(req.body)
    .then((group) => res.status(201).json(group))
    .catch(next);
};

module.exports.list = (req, res, next) => {
  Event.findById(req.event)
    .populate("groups")
    .then((event) => res.json(event.groups))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Group.findById(req.params.id)
    .then((group) => {
      res.json(group);
    })
    .catch();
};

module.exports.delete = (req, res, next) => {
  Group.deleteOne({ _id: req.group.id })
    .then(() => res.status(204).send())
    .catch(next);
};

module.exports.update = (req, res, next) => {
  Object.assign(req.group, req.body);
  req.group
    .save()
    .then((group) => res.json(group))
    .catch(next);
};
