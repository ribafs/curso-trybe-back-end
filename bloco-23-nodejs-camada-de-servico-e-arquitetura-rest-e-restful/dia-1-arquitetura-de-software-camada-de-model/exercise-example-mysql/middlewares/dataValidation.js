const validData = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(406)
      .json({ message: 'All fields are mandatory' });
  }
  
  next();
};

module.exports = validData;