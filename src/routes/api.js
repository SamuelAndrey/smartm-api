const express = require('express');
const authController = require('../controllers/v1/auth-controller');
const authMiddleware = require('../middlewares/auth-middleware')

const userRouter = express.Router();

userRouter.delete('/api/v1/auth/logout', authMiddleware, authController.logout);

module.exports = userRouter;