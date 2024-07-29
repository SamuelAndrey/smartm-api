const express = require('express');
const iotController = require('../controllers/v1/iot-controller');
const iotMiddleware = require('../middlewares/iot-middleware');

const iotRouter = express.Router();

iotRouter.post('/api/v1/iot/monitoring', iotMiddleware, iotController.create);
iotRouter.get('/api/v1/iot/monitoring', iotController.get);

module.exports = iotRouter;