const mongoose = require("mongoose");

//creating schema for cartItem in cart
const cartItemSchema = new mongoose.Schema({
    cart:{
        //of type cart fk from carts
        type: mongoose.Schema.Types.ObjectId,
        ref: "cart",
        required: true
    },
    product:{
        //of type product fk from products
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true
    },
    quantity:{
        type: Number,
        required: true,
        default: 1
    },
    price: {
        type: Number,
        required: true
    },
    userId: {
        //of type user fk from users
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    }
});

//cart, product, quantity, price, userId
const CartItem = mongoose.model("cartItems", cartItemSchema);
module.exports= CartItem;