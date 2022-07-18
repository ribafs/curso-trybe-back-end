const Joi = require('joi');
const bcrypt = require('bcrypt');
const models = require('../database/models');
const { throwNotFoundError, unauthorized } = require('./utils');

const usersService = {
  bodyAddValidate: async (obj) => {
    const schema = Joi.object({
      email: Joi.string().required().email().max(255),
      passwordHash: Joi.string().required().max(255),
      name: Joi.string().required().max(255),
      phone: Joi.string().required().max(255),
    });
    const result = await schema.validateAsync(obj);
    return result;
  },

  passVerify: async (pass, passHash) => {
    try {
      await bcrypt.compare(pass, passHash);
    } catch (error) {
      unauthorized('Invalid password');
    }
  },

  paramsIdValidate: async (obj) => {
    const schema = Joi.object({
      id: Joi.number().required().positive().integer(),
    });
    const result = await schema.validateAsync(obj);
    return result;
  },

  add: async (data) => {
    const modelWithHash = {
      ...data,
      passwordHash: await bcrypt.hash(data.passwordHash, 10),
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

  getLasy: async (id) => {
    // fazendo código usando toJSON()
    const userModel = await models.users.findByPk(id, {
      attributes: { exclude: ['passwordHash'] },
    });
    const user = userModel.toJSON();
    const petsList = await models.pets.findAll({
      where: { userId: user.id },
      attributes: { exclude: ['userId'] },
    });
    user.pets = petsList.map((pet) => pet.toJSON());
    return user;
  },

  getEager: async (id) => {
    const userModel = await models.users.findByPk(id, {
      attributes: { exclude: ['passwordHash'] },
      include: {
        model: models.pets,
        as: 'pets',
        attributes: { exclude: ['userId'] },
      },
    });
    const user = userModel.toJSON();
    return user;
  },

  getByEmail: async (email) => {
    const user = await models.users.findOne({
      where: { email },
      raw: true,
    });
    if (!user) throwNotFoundError('"user" not found');
    return user;
  },
};

module.exports = usersService;