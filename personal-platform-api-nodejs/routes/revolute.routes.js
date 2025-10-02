const express = require('express');
const revoluteController = require("../controllers/revolute.controller.js");

const router = express.Router();

router.get("/refresh_token",revoluteController.refreshAccessToken);


module.exports = router;