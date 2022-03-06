const express= require('express')

const app = express()
app.set("view engine",'ejs')

app.use(allbooks)

app.get('/Books',(req,res)=>{
   
    res.send({
        Book1:"Game of thrones",
        Book2:"Harry Potter",
        Book3:"HArrypotter"
    })
})

app.get('/Books/:name',(req,res)=>{
   console.log(req.params.name)
    res.render('view',{name :req.params.name})
})



app.listen(8000)


function allbooks(req,res,next){
    console.log("Fetching all ")
    next()
}