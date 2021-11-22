const User = require("../models/User");
const jwt = require("jsonwebtoken");

const manejoErrores = (error) => {
  let errors = { email: "", password: "" };
  //   console.log(error);
  if (error.message === "login: Contraseña incorrecta.") {
    errors.email = "Email y/o contrasenia incorrectos.";
    errors.password = "Email y/o contrasenia incorrectos.";
  }

  if (error.message === "login: Correo ingresado no existe.") {
    errors.email = "Email y/o contrasenia incorrectos.";
    errors.password = "Email y/o contrasenia incorrectos.";
  }

  if (error.code === 11000) {
    errors.email = "Este email ya se encuentra registrado.";
  }

  if (error.message.includes("User validation failed:")) {
    Object.values(error.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

const maxAge = 24 * 60 * 60;
const crearToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: maxAge });
};

module.exports.postRegistrar = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    const token = crearToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ id: user._id, email });
  } catch (error) {
    const errors = manejoErrores(error);
    res.status(400).json(errors);
  }
};

module.exports.postIniciarSesion = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = crearToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });

    res.status(200).json({ id: user._id, email });
  } catch (error) {
    const errors = manejoErrores(error);
    res.status(400).json(errors);
  }
};

module.exports.postCerrarSesion = async (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.send("postCerrarSesion");
};
