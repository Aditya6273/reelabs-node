const express = require("express")
const app = express()
const path= require("path")
const ejs = require("ejs")
// const session = require("express-session")
// const MongoStore = require('connect-mongo')
const userCollection = require("./User")
const router = require("./router")
const templatepath = path.join(__dirname,'./templates')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.set("view engine" , "ejs")
app.set("views",templatepath)

app.use("/", router);


app.listen(5400,()=>{
    console.log("port connected")
})
