const Product = require("../models/product.model");

async function createProduct(reqData){
    const product=new Product({
        name:reqData.name,
        description:reqData.description,
        price: reqData.price,
        quantity: reqData.quantity,
        type: reqData.type,
        imageUrl: reqData.imageUrl,
    })
    return await product.save();
}

async function updateProduct(productId, reqData){
    return await Product.findByIdAndUpdate(productId, reqData);
}

async function findProductById(id){
    const product = await Product.findById(id);

    if(!product){
        throw new Error("Product not found, id: ", id);
    }
    return product;
}

async function getAllProducts(reqQuery){
    let {type,minPrice,maxPrice,sort,stock}=reqQuery;

    let query = Product.find();

    if (minPrice && maxPrice){
        query= await query.where("price").gte(minPrice).lte(maxPrice);

    }
    //unsure what is this shit
    if (stock){
        if (stock=="in_stock"){
            query=query.where("quantity").gt(0);
        }
        else if (stock=="out_of_stock"){
            query=query.where("quantity").lt(1);
        }
    }

    if (sort){
        const sortDirection=sort==="price_height"?-1:1;
        query=query.sort({price:sortDirection})
    }

    const totalProducts=await Product.countDocuments(query);
    const products=await query.exec();
    
    return {content:products};
}

async function createMultipleProduct(products){
    for(let product of products){
        await createProduct(product);
    }
}

module.exports = {createProduct, 
    updateProduct, 
    findProductById, 
    getAllProducts, 
    createMultipleProduct};