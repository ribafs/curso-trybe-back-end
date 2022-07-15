const usersService = require('../services/usersService');

const usersController = {
  /** @type {import('express').RequestHandler} */
  list: async (_req, res) => {
    const users = await usersService.list();
    res.status(200).json(users);
  },

  /** @type {import('express').RequestHandler} */
  add: async (req, res) => {
    const data = await usersService.bodyAddValidate(req.body);
    const user = await usersService.add(data);
    res.status(201).json(user);
  },

  /** @type {import('express').RequestHandler} */
  get: async (req, res) => {
    const { id } = await usersService.paramsIdValidate(req.params);
    const user = await usersService.getEager(id);
    res.status(201).json(user);
  },
  
};

module.exports = usersController;