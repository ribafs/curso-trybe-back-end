const validEmail = (req, res, next) => {
  const { email } = req.body;
  
  if (email === undefined) {
    return res.status(406)
      .json({ message: 'email is required' });
  }
  
  if (email.length === 0) {
    return res.status(406)
      .json({ message: 'email is not allowed to be empty' });
  }

  const valid = /\S+@\S+\.\S+/;
  const emailOk = valid.test(email);
  if (!emailOk) {
    return res.status(406)
      .json({ message: 'email must be a valid email' });
  }

  next();
};

module.exports = validEmail;