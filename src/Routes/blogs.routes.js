const express = require('express');
const { isValidUser } = require('../middlewares/auth');
const Router = express.Router();

//Public Route
Router.post('/fetch-all-posts');

// Protected Routes
Router.use(isValidUser);
Router.post('/create-blog');
Router.get('/get-blog-by-user');

module.exports = Router;