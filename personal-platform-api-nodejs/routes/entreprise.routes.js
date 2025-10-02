const express = require('express');
const entrepriseController = require("../controllers/entreprise.controller");
const { verifyToken } = require("../middlewares/jwt.middleware.js");


const router = express.Router();

router.get("/", entrepriseController.getEntreprises);

router.get("/shareentreprise/:token", verifyToken, entrepriseController.findEntrepriseByToken);

router.get("/:id",verifyToken, entrepriseController.getEntreprise);

router.delete("/:id", verifyToken, entrepriseController.deleteEntreprise);

router.patch("/:id",verifyToken,entrepriseController.updateEntreprisePatch);

module.exports = router;