import Joi from '@hapi/joi';

const validateLoan = Joi.object({
  amount: Joi.number().min(2).required(),
  tenor: Joi.number().integer().min(1).max(12).required(),
});

export default validateLoan;