const { prismaClient } = require("./app/database");

async function sprinkleSeeder() {
  const sprinkleData = {
    id_iot: 1,
    is_active: false
  };

  try {
    await prismaClient.sprinkler.create({
      data: sprinkleData
    });
    console.log("Sprinkle seeding completed.");
  } catch (error) {
    console.error("Error during sprinkle seeding:", error);
  }
}

async function iotSeeder() {
  const iotData = [
    {
      id_iot: 1,
      wind_speed: 10,
      air_temperature: 25,
      air_humidity: 60,
      soil_ph: 7,
      soil_moisture: 30,
      soil_temperature: 20,
      device_status: true,
    },
    {
      id_iot: 2,
      wind_speed: 12,
      air_temperature: 27,
      air_humidity: 65,
      soil_ph: 6.5,
      soil_moisture: 35,
      soil_temperature: 22,
      device_status: false,
    },
  ];

  try {
    for (const iot of iotData) {
      await prismaClient.iot.create({
        data: iot
      });
    }
    console.log("IoT seeding completed.");
  } catch (error) {
    console.error("Error during IoT seeding:", error);
  }
}

async function mainSeeder() {
  try {
    await sprinkleSeeder();
    await iotSeeder();
  } finally {
    await prismaClient.$disconnect();
  }
}

mainSeeder().then(r => console.log("Success Add Seeder"));
