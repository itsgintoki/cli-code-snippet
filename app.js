const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT||8000
const snippetRoutes = require('./routes/SnippetRoutes')

connectDB()

const app = express()


const mongoose = require('mongoose');


app.use('/api', snippetRoutes);


app.listen(port,()=>console.log(`Server listening on port ${port}`)
)
