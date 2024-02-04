const Event = require("../models/event.model");

module.exports.list = (req, res, next) => {
  Event.find()
    .then((events) => {
      res.json(events);
    })
    .catch(next);
};
