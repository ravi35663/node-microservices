const express = require('express');
// const BlogController = require('../Controllers/Users/users.controller');
const BlogController = require('../Controllers/Blogs/blogs.controller');
const { isValidUser } = require('../Middlewares/auth.middleware');
const Router = express.Router();

// Public Routes
Router.get('/',BlogController.fetchAllBlogs);

// Protected Routes
Router.use(isValidUser) // Middleware to check user is there.

Router.post('/create',BlogController.create);
Router.get('/get-by-user',BlogController.fetchBlogsByUser)
module.exports = Router;