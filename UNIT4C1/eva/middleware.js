
const express = require("express");
const app = express();

app.use(logger);

app.get("/books",(req,res)=>{
    res.send({ route: "/books"})
});


app.get("/libraries",checkPermission("librarian"),(req,res)=>{
   return res.send({ route: "/libraries",permission:res.permission});
});

app.get("/authors",checkPermission("author"),(req,res)=>{
    return res.send({ route: "/authors",permission:res.permission});
});

function logger(req,res,next){
    console.log(req.path);
    next();
};
function checkPermission(role){
    return function (req,res,next){
        if(role === "librarian"){
            res.permission = true;
            return next();
        }else if(role === "author"){
            res.permission = true;
            return next();
        }
        else{
            return res.send("not allowed")

        }
    }
}


app.listen(5000,()=>{
    console.log("hiii");
})
