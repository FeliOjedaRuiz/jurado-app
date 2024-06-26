const User = require("../models/user.model");
const Event = require("../models/event.model");
const createError = require("http-errors");
const jwt = require("jsonwebtoken");

const maxSessionTime = parseInt(process.env.MAX_SESSION_TIME) || 3_600;

module.exports.create = (req, res, next) => {
  User.create(req.body)
    .then((user) => res.status(201).json(user))
    .catch(next);
};

module.exports.listJuries = (req, res, next) => {
  Event.findById(req.paramas.eventId)
    .populate("juries")
    .then((event) => {
      res.json(event.juries);
    })
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  User.deleteOne({ _id: req.params.id })
    .then(() => res.status(204).send())
    .catch(next);
};

module.exports.listJuries = (req, res, next) => {
  Event.findById(req.event.id)
    .populate("juries")
    .then((event) => {
      res.json(event.juries);
    })
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  User.findById(req.params.userId)
    .populate("puntuations")
    .then((user) =>{
      res.json(user)})
    .catch(next);
};

module.exports.update = (req, res, next) => {
  Object.assign(req.user, req.body);
  req.user
    .save()
    .then((user) => res.json(user))
    .catch(next);
};

// module.exports.update = (req, res, next) => {
//   User.findByIdAndUpdate(req.params.id, req.body)
//     .then((user) => {
//       User.findById(user.id)
//         .then((user) => res.json(user))
//         .catch(next);
//     })
//     .catch(next);
// };

module.exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return next(createError(401, "Invalid credentials"));
      }
      user.checkPassword(req.body.password).then((match) => {
        if (!match) {
          return next(createError(401, "Invalid credentials"));
        }
        const token = jwt.sign(
          { sub: user.id, exp: Date.now() / 1000 + maxSessionTime },
          process.env.JWT_SECRET
        );

        res.json({ token, ...user.toJSON() });
      });
    })
    .catch(next);
};
