const Joi = require("joi");

const registerUserValidation = Joi.object({
  email: Joi.string().max(200).required().email(),
  password: Joi.string().max(100).required(),
  name: Joi.string().max(255).required(),
});

const loginUserValidation = Joi.object({
  email: Joi.string().max(200).required().email(),
  password: Joi.string().max(100).required(),
});

module.exports = {
  registerUserValidation,
  loginUserValidation,
}

