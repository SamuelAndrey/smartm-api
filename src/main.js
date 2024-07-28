const web = require("./app/web");
const { logger } = require("./app/logging");
require('dotenv').config();

const PORT = process.env.PORT;

web.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
});
