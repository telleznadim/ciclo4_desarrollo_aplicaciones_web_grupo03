const express = require("express");
const multer = require("multer");
var cors = require("cors");

var corsOptions = {
  origin: "http://localhost:8080",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};

const app = express();

const upload = multer({
  dest: "./uploads/",
});

// ext...
// documentos: pdf, docx, pptx, ...excel...
// imagenes: png, jpg.....
// otros: los dem[as....]

app.use(cors(corsOptions));
app.listen(5000, () => console.log("Running on port 5000"));

app.post("/upload", upload.single("file"), (req, res) => {
  console.log("POST1");
  console.log(req.file);
  res.json({ file: req.file });
});

app.get("/test", (req, res) => {
  console.log("POST");
  res.json({ bien: "Todo OK" });
});
