const express = require("express")
const mongoose=require("mongoose")
const app=express()
app.use(express.json())

const connect =()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/Library")
}

// ____________________________________

const sectionschema =new mongoose.Schema(
    {
        section:{
            type: String,
            require:true
        }
    },
    {
        versionKey:false,
        timestamps:true
    }
)


// ----------model-------------

const Section=mongoose.model("section",sectionschema)

// -----CRUD------

app.get("/sections",async(req,res)=>{
    try {
        const sections=await Section.find({}).lean().exec()
        return res.status(200).send({section:sections})
    } catch (error) {
        console.log("error");
        return res.status(500).send(res.msg)
        
    }
})

// ------post------
app.post("/sections",async(req,res)=>{
    try {
        const section =await Section.create(req.body)
        return res.status(201).send({section})
    } catch (error) {
        console.log("error");
        return res.status(500).send({error: error})
        
    }
})
// ------------Books schema-----------

const booksscehma = new mongoose.Schema(
    {
        Bookname:{type:String,require:true},
        sectionid:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"section",
            require:true

        },
       authorid: {
           type:mongoose.Schema.Types.ObjectId,
           ref:"author",
           require:true
    
        }
    },{
        varsionKey:false,
        timestamps:true
    }

)

// ----------Model---------
const Books=mongoose.model("book",booksscehma)


// ----------CRUD--------


app.get("/Books",async(req,res)=>{
    try {
        const books=await Books.find({}).lean().exec()
        return res.status(200).send({Books:books})
    } catch (error) {
        console.log("error");
        return res.status(500).send(res.msg)
        
    }
})

// ------post------
app.post("/Books",async(req,res)=>{
    try {
        const book=await Book.create(req.body)
        return res.status(200).send({book})
    } catch (error) {
        console.log("error");
        return res.status(500).send(res.msg)
        
    }
})

// -------------auhor-------------


const authorschema= new mongoose.Schema(
    {
        name:{
            type:String,require:true
        }
       
    },
    {
        versionKey:false,
        timestamps:true
    }

)

// ----------------model--------------------

const Author= mongoose.model("author",authorschema)

// ---------------------CRUD-----------------------

app.get("/Author",async(req,res)=>{
    try {
        const Author=await section.find({}).lean().exec()
        return res.status(200).send({author:Author})
    } catch (error) {
        console.log("error");
        return res.status(500).send(res.msg)
        
    }
})

// ------post------
app.post("/Author",async(req,res)=>{
    try {
        const Author=await author.create(req.body)
        return res.status(200).send({Author})
    } catch (error) {
        console.log("error");
        return res.status(500).send(res.msg)
        
    }
})




// searchapi--------------------

// find all the boooks by author

app.get("/:authorId/books", async (req, res) => {
    try {
        const books = await Book.find({ author_id: req.params.authorId }).lean().exec();
        return res.status(200).send(books);
    } catch (error) {
        return res.status(500).send({ error: error })
    }
})

//find books in a section

app.get("/books/:sectionId", async (req, res) => {
    try {
        const books = await Book.find({ section_id: req.params.sectionId }).lean().exec();
        return res.status(200).send(books);
    } catch (error) {
        return res.status(500).send({ error: error })
    }
})

//find books of 1 author inside a section Optional

app.get("/books/:authorId/:sectionId", async (req, res) => {
    try {
        const books = await Book.find({ author_id: req.params.authorId, section_Id: req.params.sectionId }).lean().exec();
        return res.status(200).send(books);
    } catch (error) {
        return res.status(500).send({ error: error })
    }
})

app.listen(5000, async () => {
    try {
        await connect()
        console.log("Connection Established")
        console.log("Listening to port 5000");
    } catch (error) {
        console.log("Please check spelling");
    }

})


