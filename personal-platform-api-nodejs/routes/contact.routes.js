const express = require('express');
const contactController = require("../controllers/contact.controller");
const { verifyToken } = require("../middlewares/jwt.middleware.js");


const router = express.Router();

router.get("/", contactController.getContacts);

router.get("/itgalaxycontacts", verifyToken ,contactController.getItGalaxyContacts);

router.get("/:id", contactController.getContact);

router.post("/",verifyToken, contactController.addContact);

router.delete("/:id",verifyToken ,contactController.deleteContact);


module.exports = router;