const express =require ("express")

const { body, validationResult } = require('express-validator');
const router=express.Router()

const User =require("../models/data.model");


router.post("/",body("first_name").not().isEmpty(),
body("last_name").not().isEmpty(),
body("email").isEmail(),
body("pincode").not().isEmpty(),

async (req,res)=>{
    try {
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } 


        const user =await User.create(req.body)
        return res.status(201).send(user)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
}
  
)
module.exports=router





// body('first_name').trim().not().isEmpty().bail().withMessage("required feild")
// .isLength({min:4}).withMessage("atleast 4 character"),

// body("last_name").not().isEmpty().withMessage("required feild")