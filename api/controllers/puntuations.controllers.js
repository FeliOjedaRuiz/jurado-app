const Puntuation = require("../models/puntuation.model");
const Group = require("../models/group.model");

module.exports.create = (req, res, next) => {
  if (req.body) {
    req.body.group = req.group.id 
    req.body.jury = req.user.id
    req.body.event = req.group.event
  }
  Puntuation.create(req.body)
    .then((puntuation) => res.status(201).json(puntuation))
    .catch(next);
};

module.exports.list = (req, res, next) => {
  const groupId = req.params.groupId || req.group.id;
  Group.findById(groupId)
    .populate("puntuations")
    .then((group) => res.json(group.puntuations))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  const criterial = { group: req.group.id, jury: req.user.id}
  Puntuation.find(criterial)
    .then((puntuation) => res.json(puntuation))
    .catch(next)
};

module.exports.update = (req, res, next) => {
  Object.assign(req.puntuation, req.body);
  req.puntuation
    .save()
    .then((puntuation) => res.json(puntuation))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Puntuation.deleteOne({ _id: req.puntuation.id })    
    .then(() => res.status(204).send())
    .catch(next)
};

module.exports.deleteAll = (req, res, next) => {
  const criterial = { event: req.event.id }
  Puntuation.deleteMany(criterial)   
    .then(() => res.status(204).send())
    .catch(next)
};
