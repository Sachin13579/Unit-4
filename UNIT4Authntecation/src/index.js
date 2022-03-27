const express=require("express")
const connect=require("./config/db")
const userController=require("./controller/user.controller")
const productController=require("./controller/product.controller")
const{register,login}=require("./controller/auth.controller")
const app=express()
app.use(express.json())
app.use("/posts", productController)
app.use("/users",userController)
app.post("/register",register)
app.post("/login",login)




app.listen(5000,async ()=>{
    try {
        await connect()
        console.log("i am listening");
    } catch (error) {
        console.error(error.message)
        
    }
})