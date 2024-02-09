const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const BlogRoutes = require('./Routes/blog.routes');
const app = express();
const cors = require('cors');

//Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/blogs',BlogRoutes);


const port = process.env.PORT;
const MONGO_URL = process.env.MONGO_DATABASE_URL
mongoose.connect(MONGO_URL).then(res=>{
    app.listen(port,(err)=>{
        if(!err){
            console.log(`Blog application is running on port: ${port}`);
        }
    })
})