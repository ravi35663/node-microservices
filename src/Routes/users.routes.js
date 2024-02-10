const express = require('express');
// const loginHandle
const { isValidUser } = require('../middleware/auth');
const { loginHandle, signupHandler,profileHandler } = require('../apiHandler/userHandler');
const Router = express.Router();

Router.post('/login',loginHandle);
Router.post('/signup',signupHandler);

// Protected Routes
Router.use(isValidUser);
Router.get('/profile',profileHandler);

module.exports = Router;