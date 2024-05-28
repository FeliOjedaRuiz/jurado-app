const Category = require("../models/category.model");
const Event = require("../models/event.model");

module.exports.create = (req, res, next) => {
  if (req.body) {
    req.body.event = req.event.id;
  }
  Category.create(req.body)
    .then((category) => res.status(201).json(category))
    .catch(next);
};

module.exports.list = (req, res, next) => {
  Event.findById(req.event.id)
    .populate("categorys")
    .then((event) => res.json(event.categorys))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Category.deleteOne({ _id: req.category.id })
    .then(() => res.status(204).send())
    .catch(next);
};

// module.exports.update = (req, res, next) => {
//   Object.assign(req.category, req.body);
//   req.category
//     .save()
//     .then((category) => res.json(category))
//     .catch(next);
// };