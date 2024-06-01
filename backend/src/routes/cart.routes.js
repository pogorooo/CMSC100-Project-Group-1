const express= require("express");
const router=express.Router();

const cartController=require("../controller/cart.controller.js");
const authenticate=require("../middleware/authenticate.js");

//check routes later
router.get("/", authenticate, cartController.findUserCart);
router.add("/add",authenticate,cartController.addItemToCart);

module.exports=router;