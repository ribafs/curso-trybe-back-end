const notFound = (message) => {
  const err = new Error(message);
  err.name = 'NotFoundError';
  throw err;
};

const unauthorized = (message) => {
  const err = new Error(message);
  err.name = 'UnauthoraizedError';
  throw err;
};

module.exports = {
  notFound,
  unauthorized,
};