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
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: maxAge * 1000,
      secure: true,
      sameSite: "None",
    });
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
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: maxAge * 1000,
      secure: true,
      sameSite: "None",
    });

    res.status(200).json({ id: user._id, email });
  } catch (error) {
    const errors = manejoErrores(error);
    res.status(400).json(errors);
  }
};

module.exports.postCerrarSesion = async (req, res) => {
  res.cookie("jwt", "", { maxAge: 1, secure: true, sameSite: "None" });
  res.send("postCerrarSesion");
};

module.exports.revisarUsuario = async (req, res) => {
  console.log("Revisar Usuario");
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log("error1");
        res.status(401).json({ user: null });
      } else {
        let user = await User.findById(decodedToken.id);
        res.status(200).json({ user: { id: user._id, email: user.email } });
      }
    });
  } else {
    console.log("error2");
    res.status(401).json({ user: null });
  }
};
