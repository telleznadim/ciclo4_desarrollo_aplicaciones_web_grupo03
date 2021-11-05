const Inversion = require("../models/inversion");

module.exports.inversiones_get = (req, res) => {
  Inversion.find()
    .then((respuesta) => {
      console.log(respuesta);
      res.send(respuesta);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({ error });
    });
};

module.exports.inversiones_post = (req, res) => {
  const { coin_name, inversion, coins, date } = req.body;

  const fecha = new Date(Date.UTC(date.year, date.month - 1, date.day));
  Inversion.create({ coin_name, inversion, coins, date: fecha })
    .then((respuesta) => {
      console.log(respuesta);
      res.status(200).json(respuesta);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json(error);
    });
};

module.exports.inversiones_delete = (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  Inversion.deleteOne({ _id: id })
    .then((respuesta) => {
      console.log(respuesta);
      res.status(200).json(respuesta);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json(error);
    });
};
