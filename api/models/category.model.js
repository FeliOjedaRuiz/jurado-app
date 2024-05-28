const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    name: {
      type: String,
      maxLength: [20, "Largo máximo 20 caracteres"],
      minlength: [1, "Largo minimo 1 caracter"],
      required: "Se requiere un nombre para la categoria",
    },
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: "Se requiere un evento",
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        return ret;
      },
    },
  }
);

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
