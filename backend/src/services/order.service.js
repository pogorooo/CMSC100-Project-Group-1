const cartService=require("../services/cart.service.js");
const Order = require("../models/order.model.js")
const OrderItem = require("../models/orderitems.js")

async function createOrder(user){
    const cart = await cartService.findUserCart(user._id);
    const orderItems =[];

    for(const item of cart.cartItems){
        const orderItem= new OrderItem({
            price:item.price,
            product:item.product,
            quantity:item.quantity,
            userId:item.userId
        })

        const createdOrderItem=await orderItem.save();
        orderItems.push(createdOrderItem)
    }
    const createdOrder= new Order({
        user,
        orderItems,
        totalPrice:cart.totalPrice,
        totalItem:cart.totalItem,

    })
    const savedOrder = await createdOrder.save();
    return savedOrder;
}

async function placeOrder(orderId){
    const order= await findOrderById(orderId);
    //0=pending, 1= confirm, 2=cancelled
    order.orderStatus=0
    return await order.save();
}

async function confirmedOrder(orderId){
    const order = await findOrderById(orderId);
    order.orderStatus=1;
    return await order.save();
}

async function cancelledOrder(orderId){
    const order = await findOrderById(orderId);
    order.orderStatus=2;
    return await order.save();
}


async function findOrderById(orderId){
    const order= await Order.findById(orderId)
    .populate("user")
    .populate({path: "orderItems",populate:{path:"product"}});

    return order;

}

async function usersOrderHistory(userId){
    try{
        const orders = await Order.find({user:userId,orderStatus:0})
        .populate({path:"orderItems",populate:{path:"product"}}).lean()

        return orders;

    }catch (error){
        throw new Error(error.message);
    }
} 

async function getAllOrders(){
    return await Order.find().populate({path:"orderItems",populate:{path:"product"}}).lean()
}

module.exports = {createOrder,
    placeOrder,
    confirmedOrder,
    cancelledOrder,
    findOrderById,
    usersOrderHistory,
    getAllOrders};