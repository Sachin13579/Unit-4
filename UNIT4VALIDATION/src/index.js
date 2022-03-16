const express = require("express");

const app = express();
app.use(express.json())
const dataController=require("./controllers/data.controller")
app.use("/users",dataController)

module.exports = app;