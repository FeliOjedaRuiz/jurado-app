const Event = require("../models/event.model");

module.exports.create = (req, res, next) => {
 Event.create(req.body)
    .then((event) => res.status(201).json(event))
    .catch(next);
};

module.exports.list = (req, res, next) => {
  Event.find()
    .then((events) => {
      res.json(events);
    })
    .catch(next);
};
