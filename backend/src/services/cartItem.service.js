const userServicec= require("../services/user.service.js");

async function updateCartItem(userId, cartItemId, cartItemData){
    try{
        const item=await findCartItemById(cartItemId);
        const user= await userService.findUserById(item.userId);

        if(!item){
            throw new Error("Cart Item not found: ", cartItemId);
        }

        if(!user){
            throw new Error("User not found: ", userId);
        }

        if(user._id.toString()===userId.toString()){
            item.quantity=cartItemData.quantity;
            item.price=item.quantity*item.product.price;
            const updatedCartItem= await item.save();
            return updatedCartItem;
        }
        else{
            throw new Error("You can't update this cart item!");
        }

    }catch(error){
        throw new Error(error.message);
    }
}

async function removeCartItem(userId,cartItemId){
    const cartItem=await findCartItemById(cartItemId);
    const user=await userService.findUserById(userId);

    if(user._id.toString()===cartItem.userId.toString()){
        await CartItem.findByIdAndDelete(cartItemId);
    }else{
        throw new Error("You can't remove another user's item!");
    }
}

async function findCartItemById(cartItemId){
    const cartItem=await findCartItemById(cartItemId);
    if(cartItem){
        return cartItem;
    } else{
        throw new Error("cartItem not found, id: ",cartItemId);
    }
}

module.exports= {updateCartItem,removeCartItem,findCartItemById};