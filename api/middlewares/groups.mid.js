const Group = require("../models/group.model");
const Event = require("../models/event.model");
const createError = require("http-errors");

module.exports.exists = (req, res, next) => {
  const groupId = req.body.group || req.params.groupId
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
  Event.findById(req.group.event)
    .then((event) => {
      if (event.admin = req.user.id) {
        next();
      } else {
        next(createError(401, "Unauthorized"));
      }
    })  
};

// module.exports.isJury = (req, res, next) => {
//   if (req.event.juries.includes(req.user.id)) {
//     next();
//   } else {
//     next(createError(401, "Unauthorized"));
//   }
// };
