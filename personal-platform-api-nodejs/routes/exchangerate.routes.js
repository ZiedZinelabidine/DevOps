const express = require('express');
const exchangerateController = require("../controllers/exchangerate.controller.js");


const router = express.Router();

router.get("/", exchangerateController.getExchangerates);

router.post("/", exchangerateController.addExchangerate);

router.patch("/:id",exchangerateController.updateExchangerate);

router.delete("/:id", exchangerateController.deleteExchangerate);


module.exports = router;