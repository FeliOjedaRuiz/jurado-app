const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    name: {
      type: String,
      maxLength: [24, "Largo máximo 24 caracteres"],
      minlength: [3, "Largo minimo 3 caracteres"],
      require: "Se requiere un nombre para el evento",
    },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: "Se requiere un administrador para el evento",
    },
    juries: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    categorys: [
      {
        type: String,
        maxLength: [16, "Largo máximo 16 caracteres"],
        minlength: [3, "Largo minimo 3 caracteres"],
      },
    ],
    open: {
      type: Boolean,
      default: false,
    },
    public: {
      type: Boolean,
      default: false,
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

eventSchema.virtual("groups", {
  ref: "Group",
  localField: "_id",
  foreignField: "event",
  justOne: false,
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
