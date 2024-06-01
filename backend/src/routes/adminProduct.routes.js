const express= require("express");
const router=express.Router();
const authenticate=require("../middleware/authenticate.js");

const productController=require("../controller/product.controller.js");

//check routes later
router.post("/", authenticate, productController.createProduct);
router.post("/create", authenticate, productController.createMultipleProduct);
router.put("/:id", authenticate, productController.updateProduct);

module.exports=router;