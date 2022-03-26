const mongoose= require("mongoose")

const PublicationModelSchema= new mongoose.Schema({
    name:{
        type:String,
    },
},{
    versionKey:false,
    timestamps:true
})
module.exports=mongoose.model("publicationmodel",PublicationModelSchema)