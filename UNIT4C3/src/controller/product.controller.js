const express=require("express")
const { body, validationResult } = require('express-validator');


const user=require("../model/user.model")
const router =express.Router()

router.post (
    "/",
    body("firstname").not().isEmpty().bail().withmessage().islength({min:3,max:30}),
    body("firstname").not().isEmpty().bail().withmessage().islength({min:3,max:30}),
    body("age").isNumeric().withMessage("age must be between 1-150").custom((value)=>{
        if(value<1||value>100){
            throw new Error("incorrect age")
        }
        return true
    }),
    async(req,res)=>{
        try {console.log(body(""))
            
        } catch (error) {
            
        }
    }

    const user=await User.creeate(req.body);

)