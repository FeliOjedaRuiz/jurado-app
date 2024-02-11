const Group = require("../models/group.model");
const createError = require("http-errors");

module.exports.exists = (req, res, next) => {
  const groupId = req.params.groupId || req.params.id;
  Group.findById(groupId)
    .then((group) => {
      if (group) {
        req.group = group;
        next();
      } else {
        next(createError(404, "Group not found"));
      }
    })
    .catch(next);
};

module.exports.isAdmin = (req, res, next) => {
  if (
    req.user.adminEvents.includes(req.group.event)
  ) {
    next();
  } else {
    next(createError(401, "Unauthorized"));
  }
};