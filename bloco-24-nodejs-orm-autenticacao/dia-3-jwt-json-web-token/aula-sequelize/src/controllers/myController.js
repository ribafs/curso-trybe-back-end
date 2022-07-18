const authService = require('../services/authService');
const petsService = require('../services/petsService');

const myController = {
  getPets: async (req, res) => {
    const authorization = await authService.tokenValidate(req.headers.authorization);
    const [, token] = authorization.split(' ');
    const { id } = await authService.readToken(token);
    const pets = await petsService.getByUserId(id);
    res.status(200).json(pets);
  },
};

module.exports = myController;