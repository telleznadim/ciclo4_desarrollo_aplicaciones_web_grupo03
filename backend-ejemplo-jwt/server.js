const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const apiRoutes = require("./routes/apiRoutes");
const { requireAuth } = require("./middleware/authMiddleware");

require("dotenv").config();

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};

const app = express();

mongoose
  .connect(
    "mongodb://" +
      process.env.DB_USERNAME +
      ":" +
      process.env.DB_PASSWORD +
      "@" +
      process.env.DB_HOST +
      ":" +
      process.env.DB_PORT +
      "/" +
      process.env.DB_NAME +
      "?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Conected to Mongo at: " + process.env.DB_HOST);
    app.listen(process.env.PORT || 5000);
    console.log("Listening on PORT: " + process.env.PORT);
  })
  .catch((err) => console.log(err));

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/auth", authRoutes);
app.use("/api", requireAuth, apiRoutes);

// app.get("/get-cookies", (req, res) => {
//   res.cookie("metodo", true, { maxAge: 2000 });
//   res.cookie("protegida", false, { httpOnly: true, maxAge: 5000 });
//   res.send("Método get-cookies");
// });
