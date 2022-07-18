const errors = {
  ValidationError: 400,
  NotFoundError: 404,
  SequelizeUniqueConstraintError: 409,
  UnauthoraizedError: 401,
};

/**
 * @param {Error} err
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const errorHandler = ({ name, message }, _req, res, _next) => {
  const status = errors[name];
  if (!status) return res.sendStatus(400);
  res.status(status).json({ message });
};

module.exports = errorHandler;