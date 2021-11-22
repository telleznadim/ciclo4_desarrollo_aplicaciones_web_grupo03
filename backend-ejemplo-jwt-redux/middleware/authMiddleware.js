const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (error, decodedToken) => {
      if (error) {
        res.status(401).send("Access Denied: " + error.message);
      } else {
        res.locals.user = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).send("Access Denied");
  }
};

module.exports = { requireAuth };
