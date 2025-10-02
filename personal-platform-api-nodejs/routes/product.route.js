const express = require('express');
const productController = require("../controllers/product.controller");
const { verifyToken } = require("../middlewares/jwt.middleware.js");


const router = express.Router();

router.get("/publicfields", productController.getPublicFieldsProducts);

router.get("/getmarketplaceproducts", productController.getMarketplaceProducts);

router.get("/getvideostrainings",  productController.getVideosTrainingProducts);

router.get("/searchmarketplaceproduct", verifyToken, productController.searchMarketplace);

router.get("/getmarketplaceproductsbybuyerid", verifyToken, productController.getMarketplaceProductsbyBuyerId);

router.get("/getvideostrainingsbybuyerid", verifyToken, productController.getVidesTrainingsbyBuyerId);

router.get("/purchasedproduct", verifyToken, productController.findPurchasedProductByToken);

router.get("/", verifyToken, productController.getProduct);

router.get("/myproducts" , verifyToken, productController.getMyProducts);

router.get("/myproductswithsoldedproduct" , verifyToken, productController.getMyProductsWithSoldedProducts);

router.get("/myproduct/:token" , verifyToken, productController.getMyProduct);

router.post("/" , verifyToken, productController.addProduct);

router.patch("/:id" , verifyToken,  productController.updateProduct);

router.delete("/", verifyToken,  productController.deleteProduct);


module.exports = router;