const express=require("express")
const app=express()
const masteraccount=require("../model/masteraccount")
const router=express.Router()

console.log("app",app);
console.log("router",router);

router.post("/",async(req,res)=>{
try {
    const Masteraccount=await masteraccount.find().lean().exec();
    return res.status(200).send(Masteraccount)
} catch (error) {
    res.status(500).send({message:error.message})
}
})