const { Router } = require("express");
const controladorInversion = require("../controllers/controladorInversion");

const router = Router();

router.get("/inversiones", controladorInversion.inversiones_get);
router.post("/crear-inversion", controladorInversion.inversiones_post);
router.delete("/inversion/:id", controladorInversion.inversiones_delete);

module.exports = router;
