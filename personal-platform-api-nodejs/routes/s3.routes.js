const express = require('express');
const s3Controller = require("../controllers/s3.controller.js");
const { verifyToken } = require("../middlewares/jwt.middleware.js");

const router = express.Router();

router.post("/startupload", verifyToken , s3Controller.startMultipartUpload);

router.post("/getuploadurl", s3Controller.getUploadPartUrl);

router.post("/completeupload", verifyToken , s3Controller.completeMultipartUpload);

module.exports = router;