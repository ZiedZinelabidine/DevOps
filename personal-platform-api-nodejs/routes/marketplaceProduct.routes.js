const express = require('express');
const marketplaceProductController = require("../controllers/marketplaceProduct.controller");
const { verifyToken } = require("../middlewares/jwt.middleware.js");

const router = express.Router();

router.get("/",verifyToken, marketplaceProductController.getMarketplaceProduct);

router.post("/" , verifyToken, marketplaceProductController.addMarketplaceProduct);

module.exports = router;

