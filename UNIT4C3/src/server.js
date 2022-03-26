const app=require("./index")
const connect=require("./configs/db")

app.listen(5000,async function(){
    try {
        await connect()
        console.log("i am listening")
        
    } catch (error) {
        console.error(error.message)
    }
})