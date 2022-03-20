const mongoose=require("mongoose")

const productSchema= new mongoose.Schema(
    {
        firstname:{
            type:String,required:true
        },
        profilepic:[{
            type:String,required:false
        }]
    },
    {
        versionKey:false,
        timestamps:true
    }
)
module.exports=mongoose.model("product",productSchema)