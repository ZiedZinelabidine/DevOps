const express = require('express');
const userController = require("../controllers/datewithtechcontact.controller.js");
const { verifyToken } = require("../middlewares/jwt.middleware.js");

const router = express.Router();

router.get("/", verifyToken,userController.getContacts);

router.get("/:id", verifyToken, userController.getContact);

router.put("/", verifyToken, userController.addContact);

router.delete("/:id",verifyToken ,userController.deleteContact);

module.exports = router;