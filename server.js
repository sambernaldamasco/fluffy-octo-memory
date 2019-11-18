// ========================
// DEPENDENCIES
// ========================
const express = require("express")

// ========================
// GLOBAL CONFIG
// ========================
const app = express()

// ========================
// MIDDLEWARE
// ========================
//body parser for json -- gotta be before the controller
app.use(express.json())
app.use(express.static('public'))

//==== controllers


// ========================
// TEST ROUTES
// ========================
app.get('/', (req, res) => {
  res.send('hello world')
})

// ========================
// CONNECTIONS
// ========================
app.listen(3000, () => {
  console.log("listening..")
});
