const mongoose=require("mongoose")
const bcrypt=require("bcrypt")

const userSchema= new mongoose.Schema(
    {
        email:{
            type:String,required:true,unique:true
        },
        password:[{
            type:String,required:false
        }]
    },
    {
        versionKey:false,
        timestamps:true
    })

    userSchema.pre("save", function(next){
        const hash = bcrypt.hashSync(this.password,8);
        this.password = hash;
        return next();
    })
Users=mongoose.model("user",userSchema)
module.exports=Users