const express = require('express')
const dontenv = require('dotenv').config()

const app = express()

// middlewares
app.use(express.json())

// routes

// server
const PORT = process.env.PORT || 3000

app.listen(PORT, () =>{
    console.log(`server is running on localhost:${PORT}`)
})