const express = require('express');
// const loginHandle
const { isValidUser } = require('../middlewares/auth');
const { loginHandle } = require('../apiHandler/userHandler');
const Router = express.Router();

Router.post('/login',loginHandle);
// Router.post('/signup')

// Protected Routes
Router.use(isValidUser);
// Router.get('/profile');

module.exports = Router;