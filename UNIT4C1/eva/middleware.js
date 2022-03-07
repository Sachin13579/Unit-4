const express=require("express")
const app=express()

app.use(logger)


app.get("/books",(req,res)=>{
    res.send({route:"/books"})
})

// app.use(checkPermission)
app.get("/libraries",(req,res)=>{
   return res.send({route:"/libraries"})
})


app.get("/authors",(req,res)=>{
   return res.send({route:"/authors",role:req.role})
})

app.listen(8000,()=>{
   console.log("I am listeining")
})


function logger(req,res,next){
    console.log (req.path)
    next()
}



function checkPermission( req,res,next){
if (req.path==="/libraries"){
    req.role("true")
}
else if (req.path==="/authors"){
    req.role ("true")
}
else{
    console.log("NOT allowed")
}
return res.send("No allowed")
}    
