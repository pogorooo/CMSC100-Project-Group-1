const mongoose = require("mongoose");
const mondbUrl = "mongodb+srv://cmsc1000:cmsc1000@cmsc100.srhrzaq.mongodb.net/?retryWrites=true&w=majority&appName=CMSC100";

const connectDb=()=>{
    return mongoose.connect(mondbUrl);
}

module.exports={connectDb};