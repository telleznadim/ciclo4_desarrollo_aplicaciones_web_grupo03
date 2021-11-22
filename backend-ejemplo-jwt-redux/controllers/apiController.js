module.exports.test = (req, res) => {
  console.log("test");
  const { id } = res.locals.user;
  console.log(id);
  // const token = req.cookies.jwt;
  // console.log(token);
  res.send("Texto de prueba recibido desde la API. Id de usuario: " + id);
};
