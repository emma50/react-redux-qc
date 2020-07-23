import Joi from '@hapi/joi';

const validateSignin = Joi.object({
  email: Joi.string().min(4).max(255).required(),
  password: Joi.string().min(6).max(255).required(),
});

export default validateSignin;