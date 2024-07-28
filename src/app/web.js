const express = require('express');
const { errorMiddleware } = require("../middlewares/error-middleware");
const publicRouter = require('../routes/public-api');
const userRouter = require("../routes/api");
const iotRouter = require("../routes/iot-api");

const web = express();
web.use(express.json());

web.use(userRouter);
web.use(publicRouter);
web.use(iotRouter);

web.use(errorMiddleware);

module.exports = web;
