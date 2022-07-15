const Joi = require('joi');
const bcrypt = require('bcrypt');
const models = require('../database/models');

const usersService = {
  bodyAddValidate: async (obj) => {
    const schema = Joi.object({
      email: Joi.string().required().email(),
      passwordHash: Joi.string().required(),
      name: Joi.string().required().max(255),
      phone: Joi.string().required().max(255),
    });
    const result = await schema.validateAsync(obj);
    return result;
  },

  add: async (data) => {
    const modelWithHash = {
      ...data,
      passwordHash: bcrypt.hash(data.passwordHash, 10),
    }; 
    const model = await models.users.create(modelWithHash);
    const newUser = model.toJSON();
    const { passwordHash, ...user } = newUser;
    return user;
  },

  list: async () => {
    const users = models.users.findAll({
      attributes: { exclude: ['passwordHash'] },
    });
    return users;
  },
};

module.exports = usersService;