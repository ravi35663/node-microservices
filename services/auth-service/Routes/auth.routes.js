const express = require('express');
const UserController = require('../Controllers/Users/users.controller');
const { isValidUser } = require('../Middlewares/auth.middleware');
const Router = express.Router();

// Public Routes
Router.post('/signup',UserController.signup);
Router.post('/login',UserController.login);

//Protected Routes
Router.use(isValidUser)
Router.get('/profile',UserController.userProfile);
// Router.post('/change-password')
// Router.post('/verify-user')
// Router.post('/forget-password')
// Router.post('/verify-otp');

module.exports = Router;