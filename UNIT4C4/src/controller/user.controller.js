
const User = require("../model/user.model")

const register=async(req,res)=>{
    try {
        let user = await User.findOne({email:req.body.email})

        if(user){
            return res.status(200).send("user already registered")
        }

        user=await User.create(req.body)
        return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send(error)
        
    }
}


const login= async(req,res)=>{
    try {
        const user=await User.findOne({email:req.body.email})

        if(user){
            return res.status(200).send(" loggedIn")
        }
        return res.status(200).send("Incorrect eamil/password")
    } catch (error) {
        return res.status(500).send(error)
    }
}
module.exports={register,login}