const Group = require("../models/group.model");

module.exports.create = (req, res, next) => {
  Group.create(req.body)
    .then((group) => res.status(201).json(group))
    .catch(next);
};
