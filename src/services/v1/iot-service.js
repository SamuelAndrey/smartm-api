const {validate} = require("../../validations/validation");
const {createIotValidation} = require("../../validations/v1/iot-validation");
const {prismaClient} = require("../../app/database");

const create = async (request) => {
  const iot = validate(createIotValidation, request)

  return prismaClient.iot.create({
    data: iot,
    select: {
      id_iot: true,
      wind_speed: true,
      air_temperature: true,
      air_humidity: true,
      soil_moisture: true,
      soil_ph: true,
      soil_temperature: true,
      device_status: true,
    }
  });
}

const get = async () => {
  return prismaClient.iot.findFirst({
    orderBy: {
      createdAt: 'desc'
    },
    select: {
      id_iot: true,
      wind_speed: true,
      air_temperature: true,
      air_humidity: true,
      soil_moisture: true,
      soil_ph: true,
      soil_temperature: true,
      device_status: true,
    }
  });
}

module.exports = {
  create,
  get,
}
