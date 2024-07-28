const express = require('express');
const authController = require('../controllers/v1/auth-controller');

const iotRouter = express.Router();

iotRouter.post('/api/v1/iot/monitoring', authController.login);

module.exports = iotRouter;