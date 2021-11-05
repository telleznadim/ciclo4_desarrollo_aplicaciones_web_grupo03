const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const rutasApi = require("./routes/api");
const cors = require("cors");
const morgan = require("morgan");

dotenv.config();
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
      process.env.DB_NAME,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Conectado a MongoDb");
    app.listen(process.env.PORT, () => {
      console.log("Escuchando en puerto: " + process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", rutasApi);
