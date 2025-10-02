const express = require('express');
const proposalController = require("../controllers/proposal.controller");
const router = express.Router();

router.post("/", proposalController.addProposal);

router.post("/:id", proposalController.updateProposal);

router.get("/", proposalController.getProposals);

router.get("/:id", proposalController.getProposal);

router.delete("/:id", proposalController.deleteProposal);

module.exports = router;