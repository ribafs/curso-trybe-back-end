const validFirstName = (req, res, next) => {
  const { firstName } = req.body;

  if (firstName === undefined) {
    return res.status(406)
      .json({ message: 'firstName is required' });
  }
  
  if (firstName.length === 0) {
    return res.status(406)
      .json({ message: 'firstName is not allowed to be empty' });
  }

  next();
};

module.exports = validFirstName;