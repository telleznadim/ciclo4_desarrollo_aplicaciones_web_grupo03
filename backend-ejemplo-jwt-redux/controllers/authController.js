const User = require("../models/User");
const jwt = require("jsonwebtoken");

const manejoErrores = (error) => {
  let errors = { email: "", password: "" };
  //   console.log(error);

  // incorrect email
  if (error.message === "login: Contrasenia incorrecta.") {
    errors.email = "Email y/o contrasenia incorrectos.";
    errors.password = "Email y/o contrasenia incorrectos.";
  }

  // incorrect password
  if (error.message === "login: Correo ingresado no existe.") {
    errors.email = "Email y/o contrasenia incorrectos.";
    errors.password = "Email y/o contrasenia incorrectos.";
  }

  if (error.code === 11000) {
    errors.email = "El email ya se encuentra registrado.";
  }

  if (error.message.includes("User validation failed:")) {
    Object.values(error.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

// create json web token
const maxAge = 1 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

module.exports.postRegistrar = async (req, res) => {
  const { email, password } = req.body;

  // const emailExiste = await User.findOne({ email: email });
  // if (emailExiste)
  //   return res
  //     .status(400)
  //     .json({ email: "El email ya se encuentra registrado", password: "" });

  // const salt = await bcrypt.genSalt();
  // const contraseniaEncriptada = await bcrypt.hash(password, salt);
  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ id: user._id, email });
  } catch (error) {
    // console.log(error);
    const errors = manejoErrores(error);
    res.status(400).json(errors);
  }
};

module.exports.postIniciarSesion = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
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

module.exports.revisarUsuario = (req, res) => {
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
