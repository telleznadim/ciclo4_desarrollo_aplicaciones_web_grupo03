const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Digita tu email porfavor!"],
    unique: [true, "Este email ya se encuentra registrado."],
    index: true,
    lowercase: true,
    validate: [isEmail, "El email escrito no es válido."],
  },
  password: {
    type: String,
    required: [true, "Digita tu contrasenia porfavor!"],
    minlength: [6, "El largo mínimo de la contrasenia es 6."],
  },
});

// fire a function before doc saved to db
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.login = async function (email, password) {
  const user = await User.findOne({ email: email });
  if (user) {
    const autorizado = await bcrypt.compare(password, user.password);
    if (autorizado) {
      return user._id;
    } else {
      throw Error("login: Contrasenia incorrecta.");
    }
  } else {
    throw Error("login: Correo ingresado no existe.");
  }
};
const User = mongoose.model("User", userSchema);

module.exports = User;
