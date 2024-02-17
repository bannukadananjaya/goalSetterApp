const express = require('express')
//add colors package
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorHandler')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000;

connectDB()
const app = express()


//handle req
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//hadle routes
app.use('/api/goals',require('./routes/goalRoutes'))


app.get('/',(req,res)=>{res.send(`App is working on Port ${port}`)})

//handle errors
app.use(errorHandler)
app.listen(port, () => console.log(`Server started on port ${port}`))