const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorHandler')
const port = process.env.PORT || 5000;

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