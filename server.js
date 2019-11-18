// ========================
// DEPENDENCIES
// ========================
const express = require("express")
const mongoose = require("mongoose")
const postsController = require("./controllers/posts.js")
const moment = require('moment')

// ========================
// GLOBAL CONFIG
// ========================
const app = express()
const db = mongoose.connection

// ========================
// MIDDLEWARE
// ========================
//body parser for json -- gotta be before the controller
app.use(express.json())
app.use(express.static('public'))
//==== controllers
app.use("/posts", postsController)



// ========================
// CONNECTIONS
// ========================
mongoose.connect("mongodb://localhost:27017/coderschoice", {useNewUrlParser: true, useUnifiedTopology: true})

db.once("open", () => {
  console.log("connected to mongoose")
});

app.listen(3000, () => {
  console.log("listening..")
});
