const commentController = require("../controllers/comment.controller.js");
const { verifyToken } = require("../middlewares/jwt.middleware.js");

const router = require("express").Router();

router.get("/" , verifyToken, commentController.getComments);

router.post("/" , verifyToken, commentController.addComment );
module.exports = router;
