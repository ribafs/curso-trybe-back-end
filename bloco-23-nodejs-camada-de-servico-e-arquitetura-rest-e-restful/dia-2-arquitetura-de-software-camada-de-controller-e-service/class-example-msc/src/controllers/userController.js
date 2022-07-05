const userService = require('../services/userService');

const userController = {
  get: async (req, res) => {
    // validar id
    const { id } = await userService.validateParamsId(req.params);
    // verificar se existe
    await userService.exists(id);
    // pegar dado (MODEL)
    const user = await userService.get(id);
    // responder
    res.json(user);
  },
};

module.exports = userController;