const Puntuation = require("../models/puntuation.model");
const Group = require("../models/group.model");

module.exports.create = (req, res, next) => {
  Puntuation.create(req.body)
    .then((puntuation) => res.status(201).json(puntuation))
    .catch(next);
};

module.exports.list = (req, res, next) => {
  Group.findById(req.group)
    .populate("puntuations")
    .then((group) => res.json(group.puntuations))
    .catch(next);
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
