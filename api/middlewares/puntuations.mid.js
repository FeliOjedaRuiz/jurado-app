const Puntuation = require("../models/puntuation.model");
const createError = require("http-errors");

module.exports.notExists = (req, res, next) => {
  Puntuation.findOne({
    $and: [
      { event: req.event.id },
      { jury: req.user.id },
      { group: req.group.id },
    ],
  })
    .then((puntuation) => {
      if (puntuation) {
        next(createError(409, "Puntuation already exists"));
      } else {
        next();
      }
    })
    .catch(next);
};

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
