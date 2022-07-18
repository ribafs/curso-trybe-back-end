const authService = require('../services/authService');
const usersService = require('../services/usersService');

const authController = {
  login: async (req, res) => {
    const data = await authService.bodyLoginValidate(req.body);
    const user = await usersService.getByEmail(data.email);
    await usersService.passVerify(data.password, user.passwordHash);
    const token = await authService.makeToken(user);
    res.status(200).json({ token });
  },
};

module.exports = authController;