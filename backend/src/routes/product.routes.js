const express= require("express");
const router=express.Router();
const authenticate=require("../middleware/authenticate.js");

const productController=require("../controller/product.controller.js");

//check route later
router.get("/", authenticate, productController.getAllProducts);
router.get("/id/:id", authenticate, productController.findProductById);

module.exports=router;