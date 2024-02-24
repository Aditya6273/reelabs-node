const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/Ecommerce')
.then(()=>{
    console.log("mongo connected")
}).catch(()=>{
    console.log("failed")
})
const schemalogin = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    role:{
        type:String,
        require:true,
        default: "user"
    }
})

const userCollection = new mongoose.model("user",schemalogin)
// const Product = mongoose.model('Product', productSchema);

module.exports = userCollection