const express= require("express");
const router=express.Router();
const authenticate=require("../middleware/authenticate.js");

const orderController=require("../controller/order.controller.js");

//check routes later
router.post("/", authenticate,orderController.createOrder);
//wala ata nito
router.get("/user",authenticate,orderController.orderHistory);
router.get("/:id", authenticate, orderController.findOrderById);

module.exports=router;