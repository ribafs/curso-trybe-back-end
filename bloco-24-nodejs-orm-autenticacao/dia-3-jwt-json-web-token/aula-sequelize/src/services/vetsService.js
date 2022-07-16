const Joi = require('joi');
const models = require('../database/models');

const vetService = {
  paramsIdValidate: async (obj) => {
    const schema = Joi.object({
      id: Joi.number().required().positive().integer(),
    });
    const result = await schema.validateAsync(obj);
    return result;
  },

  listPetsByVet: async (vetId) => {
    const vetModel = await models.vets.findByPk(vetId, {
      include: { model: models.pets, as: 'pets' },
    });
    const vet = vetModel.toJSON();
    return vet;
  },
};

module.exports = vetService;