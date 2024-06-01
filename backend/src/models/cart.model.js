const mongoose = require("mongoose");

//creating schema for cart data persistence
const cartSchema = new mongoose.Schema({
    user:{
        //of user type fk from users
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    },
    cartItems:[{
        //of product type
        type: mongoose.Schema.Types.ObjectId,
        ref: "cartItems",
        required: true
    }],
    totalPrice: {
        type: Number,
        required: true,
        default: 0
    },
    totalItem:{
        type: Number,
        required: true,
        default: 0
    }
})

//user, cartItems, totalPrice, totalItem
const Cart= mongoose.model("cart", cartSchema);
module.exports=Cart;