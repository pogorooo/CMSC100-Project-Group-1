const express = require("express");
const cors = require("cors");
const multer = require("multer");
const app = express();
const path = require("path");

app.use(express.json());
app.use(cors());


app.get("/",(req,res)=>{
    return res.status(200).send({message: "API is accessed", status: true})
})

//image storage
const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req,file,cb) =>
        {
            return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
        }
})

const upload = multer({storage:storage})

//creating upload endpoint for images
app.use("/images", express.static("upload/images"))
app.post("/upload",upload.single('product'),(req,res)=>
{
    res.json({
        success: true,
        image_url:`http://localhost:5454/images/${req.file.filename}`
    })
})

const authRouters= require("./routes/auth.route.js");
app.use("/auth",authRouters);

const userRouters= require("./routes/user.route.js");
app.use("/api/users", userRouters);

const productRouter=require("./routes/product.routes.js");
app.use("/api/products", productRouter);

const adminProductRouter=require("./routes/adminProduct.routes.js");
app.use("/api/admin/products",adminProductRouter);

const cartRouter=require("./routes/cart.routes.js");
app.use("/api/cart", cartRouter);

const cartItemRouter=require("./routes/cartItem.routes.js");
app.use("/api/cart_items", cartItemRouter);

const orderRouter=require("./routes/order.routes.js");
app.use("/api/orders", orderRouter);

const adminOrderRouter=require("./routes/adminOrder.routes.js");
app.use("/api/admin/orders", adminOrderRouter);

module.exports=app;

