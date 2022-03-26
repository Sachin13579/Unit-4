const express=require("express")

const comment=require("../model/comment.model")

const router=express.Router()

router.post("async",(req,res)=>{
    try {
        const comment =await comment.create(req.body)
    } catch (error) {
        console.log({"error":error})
        
    }
})
module.exports=router