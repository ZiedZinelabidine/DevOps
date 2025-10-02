const loginController = require("../controllers/login.controller.js");

const router = require("express").Router();

router.post("/", loginController.forgetpassword);

module.exports = router;