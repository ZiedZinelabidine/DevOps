const express = require('express');
const userController = require("../controllers/dateuser.controller.js");
const { verifyToken } = require("../middlewares/jwt.middleware.js");

const router = express.Router();

router.get("/", verifyToken,userController.getDateUsers);

router.get("/showdetailprofil/:token", verifyToken,userController.findDatauserByToken);

router.get("/:id", verifyToken, userController.getDateuser);

router.put("/:id", userController.updateDateuser);

module.exports = router;