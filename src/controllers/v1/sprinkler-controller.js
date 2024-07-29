const sprinklerService = require('../../services/v1/sprinkler-service');

const getStatus = async (req, res, next) => {
  try {
    const sprinkle = await sprinklerService.getStatus();
    res.status(200).json({
      data: sprinkle,
      meta: {
        status: 200,
        message: "Success Get Sprinkler Status."
      }
    });
  } catch (e) {
    next(e);
  }
}

const setStatus = async (req, res, next) => {
  try {
    const sprinkle = await sprinklerService.setStatus();
    res.status(200).json({
      data: sprinkle,
      meta: {
        status: 200,
        message: "Success Set Sprinkler Status."
      }
    });
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getStatus,
  setStatus,
}