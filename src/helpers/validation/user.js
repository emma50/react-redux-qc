import Joi from '@hapi/joi';

const validateUser = Joi.object({
  firstName: Joi.string().min(2).max(50).required(),
  lastName: Joi.string().min(2).max(50).required(),
  password: Joi.string().min(6).max(255).required(),
  email: Joi.string().min(4).max(255).required(),
  address: Joi.string().min(6).required(),
  mobileno: Joi.number().min(10).required(),
});

export default validateUser;