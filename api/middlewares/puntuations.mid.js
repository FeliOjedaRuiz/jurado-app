const Puntuation = require("../models/puntuation.model");
const Event = require("../models/event.model");
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
  Puntuation.findById(req.params.puntuationId )
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

module.exports.isJury = (req, res, next) => {
  Event.findById(req.puntuation.event)
  .then((event) => {
    if (event.juries.includes(req.user.id)) {
      next();
    } else {
      next(createError(401, "Unauthorized"));
    }
  });
};
