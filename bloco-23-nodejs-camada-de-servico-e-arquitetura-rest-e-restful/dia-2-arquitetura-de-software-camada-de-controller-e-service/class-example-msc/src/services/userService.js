const Joi = require('joi');
const { thorwNotFoundError } = require('./utils');
const userModel = require('../models/userModel'); 

const userService = {
  validateParamsId: async (unknown) => {
    const schema = Joi.object({
      id: Joi.number().required().positive().integer(),
    });
    const { result } = await schema.validateAsync(unknown);
    return result;
  },
  exists: async (id) => {
    const exists = await userModel.exists(id);
    if (!exists) thorwNotFoundError('User not found'); // SERVICE
  },
  get: async (id) => userModel.get(id),
};

module.exports = userService;