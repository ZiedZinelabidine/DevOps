const express = require('express');
const RecruitementController = require("../controllers/recrutement.controller.js");
const { verifyToken } = require("../middlewares/jwt.middleware.js");

const router = express.Router();

router.get("/", RecruitementController.getRecrutements);

router.get("/:id", verifyToken, RecruitementController.getRecrutement);

router.post("/", RecruitementController.addRecrutement);

router.delete("/:id", verifyToken, RecruitementController.deleteRecrutement);

module.exports = router;