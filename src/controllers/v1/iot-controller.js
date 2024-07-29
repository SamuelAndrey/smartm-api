const iotService = require('../../services/v1/iot-service')
const create = async (req, res, next) => {
  try {
    const iot = await iotService.create(req.body);
    res.status(201).json({
      data: iot,
      meta: {
        status: 201,
        message: "Success Create IoT Data."
      }
    });
  } catch (e) {
    next(e);
  }
}

const get = async (req, res, next) => {
  try {
    const iot = await iotService.get();
    res.status(200).json({
      data: { ...iot },
      meta: {
        status: 200,
        message: "Success Get IoT Data."
      }
    });
  } catch (e) {
    next(e);
  }
}

module.exports = {
  create,
  get,
}