import express from 'express'
import dotenv from 'dotenv'
import dbConnect from './config/dbConnect.js'
import route from './routes/route.js'
import userRoutes from './routes/userRoutes.js'
dotenv.config()
dbConnect()

const app = express()

// middlewares
app.use(express.json())

// routes
app.use('/api/auth', route )
app.use('/api/users', userRoutes)
// server
const PORT = process.env.PORT || 3000

app.listen(PORT, () =>{
    console.log(`server is running on localhost:${PORT}`)
})