const mongoose= require("mongoose")

const CommentModelSchema= new mongoose.Schema({
    body:{
        type:String,
    },userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    }
},{
    versionKey:false,
    timestamps:true
},
)
module.exports=mongoose.model("commentmodel",CommentModelSchema)