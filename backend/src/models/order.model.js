const mongoose = require("mongoose");
const {Schema} = mongoose;

const orderSchema = new Schema({
    //id for each record is immediately created so we don't have to do it here (_id)
    user:{//ID reference to the user
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    orderItems:[{//ID reference to each product
        type: mongoose.Schema.Types.ObjectId,
        ref: "orderItems"
    }],
    orderDate:{
        type: Date,
        default: Date.now
    },
    orderStatus: {//0 means Pending, 1 means Completed, 2 means Cancelled
        //by this logic, all newly created order are pending
        type: Number,
        required: true,
        default: 0,
    },
    totalPrice:{
        type: Number,
        required: true
    },
    totalItem:{
        type: Number,
        required: true
    }
});

//user(fk), orderItems, orderDate, status, totalPrice, totalItem
const Order = mongoose.model("orders",orderSchema)
module.exports = Order;