const express = require('express');
const accountingController = require("../controllers/accounting.controller.js");
const { verifyToken } = require("../middlewares/jwt.middleware.js");

const router = express.Router();

router.get("/", accountingController.getAccountings);

router.get("/:id", verifyToken, accountingController.getAccounting);

router.put("/:id", verifyToken, accountingController.updateAccounting);

router.delete("/:id", verifyToken, accountingController.deleteAccounting);

module.exports = router;