const express = require('express');
const authController = require('../controllers/v1/auth-controller');

const publicRouter = express.Router();

publicRouter.post('/api/v1/auth/login', authController.login);
publicRouter.post('/api/v1/auth/register', authController.register);

module.exports = publicRouter;