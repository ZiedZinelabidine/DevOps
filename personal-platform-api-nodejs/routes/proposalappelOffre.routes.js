const express = require('express');
const proposalAppelOffreController = require("../controllers/proposalappelOffre.controller");
const { verifyToken } = require("../middlewares/jwt.middleware.js");


const router = express.Router();

router.get("/", proposalAppelOffreController.getProposalsAppelOffre);

router.get("/:id", proposalAppelOffreController.getAppeloffreProposal);

router.post("/",verifyToken ,proposalAppelOffreController.addProposalAppelOffre);

router.delete("/:id",verifyToken ,proposalAppelOffreController.deleteProposalAppelOffre);


module.exports = router;