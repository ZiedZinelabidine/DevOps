const express = require("express");
const accountingJobController = require("../controllers/accountingJob.controller.js");
const { verifyToken } = require("../middlewares/jwt.middleware.js");

const router = express.Router();

router.get("/", verifyToken, accountingJobController.getAccountingJobs);

router.get("/alljobs", verifyToken, accountingJobController.getAccountingAllJobs);

router.get("/accountingjobsbyaccountid/:id", verifyToken, accountingJobController.getAccountingJobsByAccountId);

router.get("/getaccountingjobbypresidentid/:id/type/:type", verifyToken, accountingJobController.getAccountingJobByPresidentId);

router.get("/getjobbypresidentid/:id/type/:type", verifyToken, accountingJobController.getJobByPresidentId);

router.get("/:id", verifyToken, accountingJobController.getAccountingJob);

router.post("/", verifyToken, accountingJobController.addAccountingJob);

router.post("/:id", verifyToken, accountingJobController.updateAccountingJob);

router.delete("/:id", verifyToken, accountingJobController.deleteAccountingJob);

module.exports = router;
