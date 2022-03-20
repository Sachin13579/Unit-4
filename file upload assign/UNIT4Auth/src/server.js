const app=require("./index")
const connect=require("./config/db")

app.listen(500,async function(){
    try {
        await connect()
        console.log("i am listening");
    } catch (error) {
        console.error(error.message)
        
    }
})