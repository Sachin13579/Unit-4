const express = require("express")
const exrpess= require("express")
const { status } = require("express/lib/response")

const Product = require('./model/product.model')

const router= express.Router()

router.get("/",async(req,res)=>{
    try {
        const  product=await Product.find().lean().exec()
        return res.status(200).send(product)
    } catch (error) {
        return res.status(500).send({message:error.message})
        
    }
})