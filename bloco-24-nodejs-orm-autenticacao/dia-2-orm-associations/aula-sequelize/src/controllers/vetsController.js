const vetService = require('../services/vetsService');

const vetController = {
  /** @type {import('express').RequestHandler} */
  getPetsByVet: async (req, res) => {
    const { id } = await vetService.paramsIdValidate(req.params);
    const vet = await vetService.listPetsByVet(id);
    res.status(200).json(vet);
  },

};

module.exports = vetController;
