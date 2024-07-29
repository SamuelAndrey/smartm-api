const iotMiddleware = async (req, res, next) => {
  const API_KEY = req.header("X-API-KEY");

  if (API_KEY !== process.env.API_KEY) {
    return res.status(401).json({message: "Unauthorized"});
  } else {
    next();
  }
}

module.exports = iotMiddleware;