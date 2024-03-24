const User = require("../models/user.model");
const createError = require("http-errors");

module.exports.exists = (req, res, next) => {
  User.findById(req.params.id)
    .then((user) => {
      if (user) {
        next();
      } else {
        next(createError(404, "User not found"));
      }
    })
    .catch(next);
};

module.exports.isOwner = (req, res, next) => {
  if (req.user.id === req.params.id) {
    next();
  } else {
    next(createError(401, "Unauthorized"));
  }
};

module.exports.juryExists = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        if (!req.event.juries.includes(user.id)) {
          req.newJury = user;
          next();
        } else {
          next(createError(409, "User already exists"));
        }
      } else {
        next(createError(404, "User not found"));
      }
    })
    .catch(next);
};
