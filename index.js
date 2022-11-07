const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config;
const PORT = 3000;
const mongoURL = process.env.MONGO_URI
mongoose.connect(mongoURL,()=>{

})

app.use(express.json())

app.listen(PORT,()=>{
  console.log(`app running on ${PORT}`)
  // res.send("hello")

})

