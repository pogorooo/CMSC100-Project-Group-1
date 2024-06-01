const Cart = require("../models/cart.model");
const CartItem =require("../models/cartItem.model");
const Product = require("../models/product.model");
//api for cart
async function createCart(user){
    try{
        const cart=new Cart({user});
        const createdCart= await cart.save();
        return createdCart;

    }catch (error){
        throw new Error(error.message);
    }
}

async function findUserCart(userId){
    try{
        let cart= await Cart.findOne({user:user});
        let cartItems= await CartItem.find({cart:cart_.id}).populate("product");
        cart.cartItems=cartItems;
        let totalPrice=0;
        let totalItem=0;
        
        for (let cartItem of cart.cartItems){
            totalPrice+=cartItem.price;
            totalItem+=cartItem.quantity;
        }
        cart.totalPrice=totalPrice;
        cart.totalItem=totalItem;

        return cart;
    }catch(error){
        throw new Error(error.message);

    }
}

async function addCartItem(userId,req){
    try{
        const cart= await Cart.findOne({user:userId});
        const product= await Product.findbyId(req.productId);

        const isPresent= await CartItem.findOne({cart:cart._id,
            product:product._id,
            userId});
        if (!isPresent){
            const CartItem=new CartItem({
                product: product._id,
                cart:cart._id,
                quantity:1,
                price:product.price,
                userId
            })
            const createdCartItem = await cartItem.save();
            cart.cartItem.push(createdCartItem);
            await cart.save();
            return "Item added to Cart";
        }
        
    }catch(error){
        throw new Error(error.message);
    }
}


module.exports={createCart,findUserCart,addCartItem}