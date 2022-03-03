const express = require("express")

const api=express();
api.get("/",(req, res)=>{
    res.send("Hello")
})


api.get("/books",(req, res)=>{
    res.send({book1:"2states",
              nook2:"Jai shree ram",
            book3:"hanuman",
        book4:"shiv",  })
})



api.listen(8000,()=>{
    console.log("i am listeing");
})