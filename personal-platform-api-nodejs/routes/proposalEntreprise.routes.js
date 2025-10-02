const express = require('express');
const proposelEntrepriseController = require("../controllers/proposalEntreprise.controller");

const router = express.Router();

router.post("/", proposelEntrepriseController.addProposalEntreprise);

router.get("/:id", proposelEntrepriseController.getProposalEntreprise);

router.get("/", proposelEntrepriseController.getProposalEntreprises);

router.patch("/:id", proposelEntrepriseController.updateProposalEntreprise);

router.delete("/:id", proposelEntrepriseController.deleteProposalEntreprise);

module.exports = router;