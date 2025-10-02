const chatidController  = require("../controllers/chatid.controller");

const router = require("express").Router();

router.get("/chatidbyuserid", chatidController.getchatidbyUserId );

router.get("/chatidbyprojectid", chatidController.getchatidbyProjectId );

router.get("/chatidbyproductid", chatidController.getchatidbyProductId );


module.exports = router;
