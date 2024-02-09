const dotenv = require('dotenv')
dotenv.config();
const cors = require('cors');
const express = require('express');
const BlogRoutes = require('./Routes/blogs.routes');
const UserRoutes  = require('./Routes/users.routes');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());


//Routes
app.use('/api/users',UserRoutes);
app.use('/api/blogs',BlogRoutes);

const port = process.env.SERVICE_PORT
app.listen(port,(err)=>{
    if(!err){
        console.log(`Application running on port: ${port}`);
    }
});