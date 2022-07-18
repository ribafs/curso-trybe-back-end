const petsService = require('../services/petsService');

const petsController = {
  /** @type {import('express').RequestHandler} */
  add: async (req, res) => {
    const data = await petsService.boddyAddValidate(req.body);
    const pet = await petsService.add(data);
    res.status(201).json(pet);
  },

  /** @type {import('express').RequestHandler} */
  get: async (req, res) => {
    const { id } = await petsService.paramsIdValidate(req.params);
    const pet = await petsService.getLazy(id);
    res.status(200).json(pet);
  },

  list: async (_req, res) => {
    const pets = await petsService.list();
    res.status(200).json(pets);
  },
  
};

module.exports = petsController;