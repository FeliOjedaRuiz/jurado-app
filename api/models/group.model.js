const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema(
  {
    name: {
      type: String,
      maxLength: [16, "Largo máximo 24 caracteres"],
      minlength: [1, "Largo minimo 1 caracter"],
      required: "Se requiere un nombre de grupo",
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

groupSchema.virtual("puntuation", {
  ref: "Puntuation",
  localField: "_id",
  foreignField: "group",
  justOne: false,
});

const Group = mongoose.model("Group", groupSchema);
module.exports = Group;
