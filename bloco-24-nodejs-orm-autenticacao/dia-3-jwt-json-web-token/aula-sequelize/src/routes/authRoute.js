const { Router } = require('express');
const authController = require('../controllers/authController');

const authRoute = Router();

authRoute.post('/login', authController.login);

module.exports = authRoute;