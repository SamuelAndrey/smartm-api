const { prismaClient } = require("../../app/database");
const { ResponseError } = require("../../errors/response-error");
const bcrypt = require("bcrypt");
const { validate } = require("../../validations/validation");
const { registerUserValidation, loginUserValidation} = require("../../validations/v1/auth-validation");
const jwt = require('jsonwebtoken')

const login = async (request) => {
  const loginRequest = validate(loginUserValidation, request)

  const user = await prismaClient.user.findUnique({
    where: {
      email: loginRequest.email
    },
    select: {
      email: true,
      name: true,
      role: true,
      password: true,
    }
  });

  if (!user) {
    throw new ResponseError(401, "Username or password wrong");
  }

  const isPasswordValid = await bcrypt.compare(loginRequest.password, user.password);
  delete user.password;

  if (!isPasswordValid) {
    throw new ResponseError(401, "Username or password wrong");
  }

  const token = jwt.sign({
    email: user.email,
    name: user.name,
  }, process.env.JWT_SECRET, {
    expiresIn: '24h'
  });

  return { user, token };
}

const register = async (request) => {
  const user = validate(registerUserValidation, request);

  const countUser = await prismaClient.user.count({
    where: {
      email: user.email
    }
  });

  if (countUser === 1) {
    throw new ResponseError(400, "Email already exists");
  }

  user.password = await bcrypt.hash(user.password, 10);

  return prismaClient.user.create({
    data: user, select: {
      email: true, name: true,
    }
  });
}


module.exports = {
  login,
  register,
}
