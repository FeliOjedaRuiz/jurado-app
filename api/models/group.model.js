const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema(
  {
    name: {
      type: String,
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

const Product = mongoose.model("Group", groupSchema);
module.exports = Product;
