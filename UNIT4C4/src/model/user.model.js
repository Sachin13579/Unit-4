const mongoose=require("mongoose")
const bcrypt=require("bcrypt");
const { type } = require("express/lib/response");
const userSchema=new mongoose.Schema(
    {
        firstname:{
            type:String,
            required:true
        },lastname:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },password:{
            type:String,
            required:true
        },

    },
    {
        versionKey:false,
        timestamps:true
    }
)
userSchema.pre("save",()=>{
    
    const hash=bcrypt.hashSync(this.password,10);
    this.passowrd=hash;
    return next()

})
userSchema.methods.checkPassword=function(passowrd){
    return bcrypt.compareSync(passowrd,this.passowrd)
}
const USER = mongoose.model("user",userSchema)
module.exports=USER