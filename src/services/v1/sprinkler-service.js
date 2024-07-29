const {prismaClient} = require("../../app/database");

const getStatus = async () => {
  return prismaClient.sprinkler.findFirst({
    select: {
      is_active: true,
    }
  });
}

const setStatus = async () => {
  const currentSprinkle = await prismaClient.sprinkler.findFirst();

  if (currentSprinkle) {
    return prismaClient.sprinkler.update({
      where: {
        id: currentSprinkle.id,
      },
      data: {
        is_active: !currentSprinkle.is_active,
      },
      select: {
        is_active: true,
      }
    });
  } else {
    throw new Error("No sprinkle found in the database.");
  }
}

module.exports = {
  getStatus,
  setStatus,
}
