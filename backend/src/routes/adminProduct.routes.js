const express= require("express");
const router=express.Router();
const authenticate=require("../middleware/authenticate.js");

const productController=require("../controller/product.controller.js");

//check routes later
//don't authenticate create product, crud not needed anyway for admin
router.post("/", productController.createProduct);
router.post("/create", productController.createMultipleProduct);
router.put("/:id", authenticate, productController.updateProduct);

module.exports=router;