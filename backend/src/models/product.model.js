const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {//name
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    type: {//1 crop, 2 poultry
        type: Number,
        required: true
    },
    imageUrl:{
        type: String
    }

});
//name, description, price, quantity, type, imageUrl

const Product = mongoose.model("products", productSchema);
module.exports = Product;