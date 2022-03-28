const app=require("./index")
const connect=require("./config/db")

app.listen(5000,async ()=>{
    console.log("i am listening")
})