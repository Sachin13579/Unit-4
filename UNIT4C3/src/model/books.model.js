const mongoose= require("mongoose")

const BookModelSchema=new mongoose.Schema(
    {
        like:{ type:Number},
        coverImage:[{
            type:String,
            required:true
        }],
        content:{
            type:String,required:true
        },userID:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true,
            unique:true
        },
        commentID:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"commentmodel",
            requires:true,
        }
    },
    {
        versionKey:false,
        timestamps:true
    }
)
module.exports=mongoose.model("Bookmodel",BookModelSchema)