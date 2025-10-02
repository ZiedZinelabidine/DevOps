const express = require('express');
const sessiontrainingProposalController = require("../controllers/sessiontrainingProposal.controller");
const router = express.Router();

router.post("/", sessiontrainingProposalController.addsessiontrainingProposal);

router.post("/:id/", sessiontrainingProposalController.updateSessionTrainingProposal);

router.get("/", sessiontrainingProposalController.getsessiontrainingProposals);

router.get("/:id/", sessiontrainingProposalController.getsessiontrainingProposal);

router.delete("/:id/", sessiontrainingProposalController.deletesessiontrainingProposal);

module.exports = router;