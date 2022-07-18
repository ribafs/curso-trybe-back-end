const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { unauthorized } = require('./utils');

const INVALID_TOKEN = 'Invalid token';

const secret = process.env.JWT_SECRET || 'secret';

const authService = {
  bodyLoginValidate: async (obj) => {
    const schema = Joi.object({
      email: Joi.string().required().email().max(255),
      password: Joi.string().required().max(255),
    });
    const result = await schema.validateAsync(obj);
    return result;
  },

  tokenValidate: async (autho) => {
    const schema = Joi.string().required();
    try {
      const result = await schema.validateAsync(autho);
      return result;      
    } catch (error) {
      unauthorized(INVALID_TOKEN);
    }
  },

  // headerTokenValidade: async (header) => {
  //   const schema = Joi.object({
  //     authorization: Joi.string().custom((value) => {
  //       if (!value) unauthorized(INVALID_TOKEN);
  //       const [, token] = value.split(' ');
  //       return token;
  //     }),
  //   });
  //   try {
  //     const result = await schema.validateAsync(header);
  //     return result;      
  //   } catch (error) {
  //     unauthorized(INVALID_TOKEN);
  //   } 
  // },

  makeToken: async ({ id, name }) => {
    const token = jwt.sign({ data: { id, name } }, secret);
    return token;
  },

  readToken: async (token) => {
    try {
      const { data } = jwt.verify(token, secret);
      return data;
    } catch (error) {
      unauthorized(INVALID_TOKEN);
    }
  },
};

module.exports = authService;