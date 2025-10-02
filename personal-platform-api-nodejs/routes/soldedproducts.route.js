const express = require('express');
const soldedProduct = require("../controllers/soldedProduct.controller");
const router = express.Router();
const { verifyToken } = require("../middlewares/jwt.middleware.js");

router.post("/" , verifyToken , soldedProduct.addSoldedProduct);

router.post("/:id/" , verifyToken , soldedProduct.updateSoldedProduct);

router.get("/",verifyToken ,soldedProduct.getSoldedProducts);

router.get("/publicfields", soldedProduct.getPublicFieldsSoldedProducts);

router.get("/:id/", verifyToken,  soldedProduct.getSoldedProduct);


module.exports = router;