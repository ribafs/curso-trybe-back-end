const Joi = require('joi');
const models = require('../database/models');

const petsService = {
  boddyAddValidate: async (obj) => {
    const schema = Joi.object({
      name: Joi.string().required().max(255),
      userId: Joi.number().required().integer().positive(),
    });
    const result = await schema.validateAsync(obj);
    return result;
  },

  paramsIdValidate: async (obj) => {
    const schema = Joi.object({
      id: Joi.number().required().positive().integer(),
    });
    const result = await schema.validateAsync(obj);
    return result;
  },

  add: async (data) => {
    const model = models.pets.create(data);
    return model;
  },

  getLazy: async (id) => {
    // fazendo o código usando raw
    const pet = await models.pets.findByPk(id, { raw: true });
    pet.user = await models.users.findOne({
      where: { id: pet.userId },
      attributes: { exclude: ['passwordHash'] },
      raw: true,
    });
    return pet;
  }, 
};

module.exports = petsService;