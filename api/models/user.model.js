const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: "Se requiere un nombre de ususario",
      maxLength: [16, "Largo máximo 16 caracteres"],
      minlength: [3, "Largo minimo 16 caracteres"],
      match: [
        /^[a-z0-9]+$/,
        "El nombre de usuario debe ser en minuscula y sin espacios",
      ],
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "El email es requerido"],
      match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Se requiere una contraseña"],
      maxLength: [16, "Largo máximo 16 caracteres"],
      minlength: [3, "Largo minimo 16 caracteres"],
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

userSchema.pre("save", function (next) {
  const user = this;

  if (user.isModified("password")) {
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

userSchema.virtual("adminEvents", {
  ref: "Event",
  localField: "_id",
  foreignField: "admin",
  justOne: false,
});

userSchema.virtual("juryEvents", {
  ref: "Event",
  localField: "_id",
  foreignField: "juries",
  justOne: false,
});


const User = mongoose.model("User", userSchema);
module.exports = User;
