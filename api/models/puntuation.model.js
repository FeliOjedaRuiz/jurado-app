const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const puntuationSchema = new Schema(
  {
    jury: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: "Se requiere un jurado",
    },
    group: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
      required: "Se requiere un grupo",
    },
    points: {
      type: Object,
      required: true,
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

const Puntuation = mongoose.model("Puntuation", puntuationSchema);
module.exports = Puntuation;
