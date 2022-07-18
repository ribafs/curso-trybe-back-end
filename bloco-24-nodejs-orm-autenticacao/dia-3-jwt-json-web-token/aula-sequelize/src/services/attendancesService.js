const Joi = require('joi');
const models = require('../database/models');

const attendanceService = {
  boddyAddValidate: async (obj) => {
    const schema = Joi.object({
      vetId: Joi.number().required().integer().positive(),
      petId: Joi.number().required().integer().positive(),
    });
    const result = await schema.validateAsync(obj);
    return result;
  },

  add: async (data) => {
    const attendance = await models.attendances.create(data, { raw: true });
    return attendance;
  },
};

module.exports = attendanceService;