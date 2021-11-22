const { Router } = require("express");
const authController = require("../controllers/authController");

const router = Router();

router.post("/registro", authController.postRegistrar);
router.post("/iniciar-sesion", authController.postIniciarSesion);
router.post("/cerrar-sesion", authController.postCerrarSesion);
router.get("/revisar-usuario", authController.revisarUsuario);

module.exports = router;
