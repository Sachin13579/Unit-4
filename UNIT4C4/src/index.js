const express=require("express")
const {register,login}=require("./controller/user.controller")
const todocontroller=require("./controller/todo.controller")
const app=express()
const userController=require("./controller/user.controller")
app.use(express.json())
app.use("/user",userController)
app.post("/register",register)
app.post("/login",login)
app.use("/todos",todocontroller)

module.exports=app;

