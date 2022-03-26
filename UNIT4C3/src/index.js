const express=require("express")

const app= express()
const userscontroller=require("./constroller/product.controller")
const bookcontroller=require("./constroller/book")
const copmmentcontroller=require("./constroller/comment")
app.use(express.json())
app.use("/users".userscontroller)
app.use("/book",bookcontroller)
app.use("/comment".copmmentcontroller)
module.exports=app