const validPass = (req, res, next) => {
  const { password } = req.body;

  if (password === undefined) {
    return res.status(406)
      .json({ message: 'password is required' });
  }

  if (password.length === 0) {
    return res.status(406)
      .json({ message: 'password is not allowed to be empty' });
  }

  if (password.length < 6) {
    return res.status(411)
      .json({ message: 'password length must be at least 6 characters long' });
  }

  if (typeof password !== 'string') {
    return res.status(406)
      .json({ message: 'password must be string' });
  }

  next();
};

module.exports = validPass;