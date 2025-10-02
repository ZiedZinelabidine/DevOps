const express = require('express');
const recruterController = require("../controllers/recruter.controller.js");
const { verifyToken } = require("../middlewares/jwt.middleware.js");

const router = express.Router();

router.get("/", recruterController.getRecruters);

router.get("/sharerecruter/:token", verifyToken, recruterController.findRecruterByToken);

router.get("/:id", verifyToken, recruterController.getRecruter);

router.post("/:id", verifyToken, recruterController.updateRecruter);

router.delete("/:id", verifyToken, recruterController.deleteRecruter);

module.exports = router;