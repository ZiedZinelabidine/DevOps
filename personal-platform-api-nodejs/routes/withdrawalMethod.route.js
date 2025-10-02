const express = require("express");
const withdrawalMethod = require("../controllers/withdrawalMethod.controller");
const { verifyToken } = require("../middlewares/jwt.middleware.js");
const router = express.Router();

router.get("/", verifyToken, withdrawalMethod.getWithdrawalMethods);

router.post("/", verifyToken, withdrawalMethod.createWithdrawalMethod);

router.get("/:id", verifyToken, withdrawalMethod.getWithdrawalMethod);

router.post("/:id", verifyToken, withdrawalMethod.updateWithdrawalMethod);

router.delete("/:id", verifyToken, withdrawalMethod.deleteWithdrawalMethod);

module.exports = router;
