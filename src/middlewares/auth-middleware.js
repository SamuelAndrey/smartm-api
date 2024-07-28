const { prismaClient } = require("../app/database");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    return res.status(401).json({message: "Authorization header missing"});
  }
  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!token) {
      return res.status(401).json({message: "Unauthorized"});
    } else {
      const query = { email: decoded.email }
      await userQuery(query, req, res, next);
    }
  } catch (e) {
    return res.status(401).json({message: "Unauthorized"});
  }
}

const authAdminMiddleware = async (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    return res.status(401).json({message: "Unauthorized"});

  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!token) {
      return res.status(401).json({message: "Unauthorized"});
    } else {
      const query = {
        email: decoded.email,
        role: "ADMIN"
      }
      await userQuery(query, req, res, next);
    }
  } catch (e) {
    return res.status(401).json({message: "Unauthorized"});
  }
}


async function userQuery(query, req, res, next) {
  const user = await prismaClient.user.findFirst({
    where: query,
    select: {
      id: true,
      name: true,
      email: true,
      region: true,
      role: true,
    }
  });

  if (!user) {
    return res.status(401).json({message: "Unauthorized"});
  } else {
    req.user = user;
    next();
  }
}

module.exports = authMiddleware;