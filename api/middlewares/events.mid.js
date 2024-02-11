const Event = require("../models/event.model");
const createError = require("http-errors");

module.exports.exists = (req, res, next) => {
  const eventId = req.params.eventId || req.params.id;
  Event.findById(eventId)
    .then((event) => {
      if (event) {
        req.event = event;
        next();
      } else {
        next(createError(404, "Event not found"));
      }
    })
    .catch(next);
};

module.exports.isMember = (req, res, next) => {
  if (
    req.user.adminEvents.includes(req.event.id) ||
    req.user.juryEvents.includes(req.event.id)
  ) {
    next();
  } else {
    next(createError(401, "Unauthorized"));
  }
};

module.exports.isAdmin = (req, res, next) => {
  if (
    req.user.adminEvents.includes(req.event.id)
  ) {
    next();
  } else {
    next(createError(401, "Unauthorized"));
  }
};
