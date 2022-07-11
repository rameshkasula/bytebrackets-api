import Joi from "joi";

export const registerUserSchema = Joi.object({
  firstName: Joi.string().trim().min(4).required(),
  lastName: Joi.string().trim().min(4).required(),
  email: Joi.string().email().trim().required(),
  password: Joi.string().trim().min(6).required(),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().email().trim().required(),
  password: Joi.string().trim().min(6).required(),
});
