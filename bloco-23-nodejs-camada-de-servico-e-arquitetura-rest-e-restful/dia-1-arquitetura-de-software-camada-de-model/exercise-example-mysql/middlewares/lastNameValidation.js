const validLastName = (req, res, next) => {
  const { lastName } = req.body;
  
  if (lastName === undefined) {
    return res.status(406)
      .json({ message: 'lastName is required' });
  }
  
  if (lastName.length === 0) {
    return res.status(406)
      .json({ message: 'lastName is not allowed to be empty' });
  }

  next();
};

module.exports = validLastName;