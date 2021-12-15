const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  console.log(req.cookies);
  console.log(req.headers);
  console.log(req.headers.cookies);
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (error, decodedToken) => {
      if (error) {
        res.status(401).send("Acceso Denegado");
      } else {
        res.locals.user = decodedToken.id;
        // console.log(decodedToken);
        next();
      }
    });
  } else {
    res.status(401).send("Acceso Denegado");
  }
};

module.exports = { requireAuth };
