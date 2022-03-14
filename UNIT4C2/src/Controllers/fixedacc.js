const express=require("express")
const app=express()
const fixedacc=require("../model/fixedaccountmodel")
const router=express.Router()

console.log("app",app);
console.log("router",router);

router.post("/",async(req,res)=>{
try {
    const Fixedacc=await fixedacc.find().lean().exec();
    return res.status(200).send(Fixedacc)
} catch (error) {
    res.status(500).send({message:error.message})
}
})