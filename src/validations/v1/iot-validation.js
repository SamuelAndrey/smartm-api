const Joi = require('joi');

const createIotValidation = Joi.object({
  id_iot: Joi.number().positive().required(),
  wind_speed: Joi.number().positive().required(),
  air_temperature: Joi.number().required(),
  air_humidity: Joi.number().required(),
  soil_ph: Joi.number().required(),
  soil_moisture: Joi.number().required(),
  soil_temperature: Joi.number().required(),
  device_status: Joi.bool().required(),
});

module.exports = {
  createIotValidation,
}
