const express = require('express');
const { isValidUser } = require('../middleware/auth');
const {createBlogHandle,fetchAllBlogs,fetchBlogsByUser} = require('../apiHandler/postHandler/index')
const Router = express.Router();

//Public Route
Router.get('/',fetchAllBlogs);

// Protected Routes
Router.use(isValidUser);
Router.post('/create',createBlogHandle);
Router.get('/get-by-user',fetchBlogsByUser);

module.exports = Router;
