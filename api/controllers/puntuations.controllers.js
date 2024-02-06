const Puntuation = require("../models/puntuation.model");

module.exports.create = (req, res, next) => {
  Puntuation.create(req.body)
    .then((puntuation) => res.status(201).json(puntuation))
    .catch(next);
};