const Puntuation = require("../models/puntuation.model");
const createError = require("http-errors");

module.exports.exists = (req, res, next) => {
  const puntuationId = req.params.puntuationId || req.params.id;
  Puntuation.findById(puntuationId)
    .then((puntuation) => {
      if (puntuation) {
        req.puntuation = puntuation;
        next();
      } else {
        next(createError(404, "Puntuation not found"));
      }
    })
    .catch(next);
};
