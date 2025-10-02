const express = require('express');
const appelOffreController = require("../controllers/appelOffre.controller");
const { verifyToken } = require("../middlewares/jwt.middleware.js");


const router = express.Router();

router.get("/", appelOffreController.getAppelOffres);

router.post("/createprojectsHP", appelOffreController.createprojectsHP);

router.get("/shareappeloffre/:token", appelOffreController.findAppelOffreByToken);

router.get("/getappeloffresbyproposaluserid", verifyToken , appelOffreController.getAppelOffresByProposalUserId);

router.get("/:id", appelOffreController.getAppelOffre);

router.post("/",verifyToken ,appelOffreController.addAppelOffre);

router.patch("/:id",verifyToken ,appelOffreController.updateAppelOffre);

router.delete("/:id",verifyToken ,appelOffreController.deleteAppelOffre);


module.exports = router;