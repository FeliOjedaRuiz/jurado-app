const Category = require("../models/category.model");
const Event = require("../models/event.model");
const createError = require("http-errors");

module.exports.exists = (req, res, next) => {
  const categoryId = req.body.category || req.params.categoryId
  Category.findById(categoryId)
    .then((category) => {
      if (category) {
        req.category = category;
        next();
      } else {
        next(createError(404, "Category not found"));
      }
    })
    .catch(next);
};

module.exports.isAdmin = (req, res, next) => {
  Event.findById(req.category.event)
    .then((event) => {
      if (event.admin = req.user.id) {
        next();
      } else {
        next(createError(401, "Unauthorized"));
      }
    })  
};