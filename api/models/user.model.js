const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const createError = require("http-errors");

const userSchema = new Schema(
  {
    // username: {
    //   type: String,
    //   required: "Se requiere un nombre de ususario",
    //   maxLength: [16, "Largo máximo 16 caracteres"],
    //   minlength: [3, "Largo minimo 3 caracteres"],
    //   match: [
    //     /^[a-z0-9]+$/,
    //     "El nombre de usuario debe ser en minuscula y sin espacios",
    //   ],
    //   lowercase: true,
    //   unique: true,
    // },
    email: {
      type: String,
      required: [true, "El email es requerido"],
      match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Se requiere una contraseña"],
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
        delete ret.password;
        return ret;
      },
    },
  }
);

userSchema.virtual("events", {
  ref: "Event",
  localField: "_id",
  foreignField: "admin",
  justOne: false,
});

userSchema.virtual("puntuations", {
  ref: "Puntuation",
  localField: "_id",
  foreignField: "jury",
  justOne: false,
});

userSchema.pre("save", function (next) {
  const user = this;

  if (user.isModified("password")) {
    if (user.password.length < 4 || user.password.length > 16) {
      return next(createError(400, "La contraseña debe tener entre 4 y 16 caracteres"));
    }
    bcrypt
      .genSalt(10)
      .then((salt) => {
        return bcrypt.hash(user.password, salt).then((hash) => {
          user.password = hash;
          next();
        });
      })
      .catch((error) => next(error));
  } else {
    next();
  }
});

userSchema.methods.checkPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
