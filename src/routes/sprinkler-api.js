const express = require('express');
const iotMiddleware = require('../middlewares/iot-middleware');
const authMiddleware = require('../middlewares/auth-middleware');
const { getStatus, setStatus } = require("../controllers/v1/sprinkler-controller");

const sprinklerRouter = express.Router();

sprinklerRouter.get('/api/v1/sprinkler/status', iotMiddleware, getStatus);
sprinklerRouter.patch('/api/v1/sprinkler/status', authMiddleware, setStatus);

module.exports = sprinklerRouter;