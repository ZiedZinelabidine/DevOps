const express = require('express');
const withdrawal = require("../controllers/withdrawal.controller");
const { verifyToken } = require("../middlewares/jwt.middleware.js");

const router = express.Router();

router.get("/", verifyToken, withdrawal.getWithdrawals);

router.post("/", verifyToken, withdrawal.createWithdrawal);

router.get("/:id", verifyToken, withdrawal.getWithdrawal);

router.post("/:id", verifyToken, withdrawal.updateWithdrawal);


module.exports = router;