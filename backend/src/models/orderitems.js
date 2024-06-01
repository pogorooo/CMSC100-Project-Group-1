const mongoose = require("mongoose");
const {Schema} = mongoose;

//for items in the order
const orderItemSchema = new Schema({
    product:{ //fk product
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    userId:{ //fk user
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    }
});

//product, quantity, price, userId(fk)
const OrderItem = mongoose.model("orderItems", orderItemSchema);
module.exports = OrderItem;