module.exports.test = (req, res) => {
  //   console.log(req.cookies.jwt);
  //   console.log(res.locals.user);
  res.send(
    "Texto de prueba recibido desde la API. Id de usuario: " + res.locals.user
  );
};
