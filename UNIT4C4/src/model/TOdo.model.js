const mongoose=require("mongoose")
const todoSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        userID:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true
        }
    },{
        versionKey:false,
        timestamps:true
    }
)
const todo=mongoose.model("ToDo",todoSchema)
module.exports=todo