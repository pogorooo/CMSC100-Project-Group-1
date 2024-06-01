const express= require("express");
const router=express.Router();

const orderController=require("../controller/adminOrder.controller.js");
const authenticate = require("../middleware/authenticate.js");

//check routes later
router.get("/",authenticate, orderController.getAllOrders);
router.put("/:orderId/confirmed",authenticate,orderController.confirmedOrders);
router.put("/:orderId/cancel",authenticate,orderController.cancelledOrders);

module.exports= router;