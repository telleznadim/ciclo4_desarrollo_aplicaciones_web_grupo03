const { Router } = require("express");
const apiController = require("../controllers/apiController");

const router = Router();

router.get("/test-route", apiController.test);

module.exports = router;
