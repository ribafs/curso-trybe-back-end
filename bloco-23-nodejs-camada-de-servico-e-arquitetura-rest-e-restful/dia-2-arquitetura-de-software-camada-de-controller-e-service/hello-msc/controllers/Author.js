// entra em contato apenas com o service
const Joi = require('joi');
const Author = require('../services/Authors');

const createAuthor = async (req, res, next) => {
  const { firstName, middleName, lastName } = req.body;

  const { error } = Joi.object({
    firstName: Joi.string().not().empty().required(),
    lastName: Joi.string().not().empty().required(),
  }).validate({ firstName, lastName });

  if (error) return next(error);

  const newAuthor = await Author.createAuthor(firstName, middleName, lastName);

  if (newAuthor.error) return next(newAuthor.error);

  return res.status(201).json(newAuthor);
};

const getAll = async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
};

const findById = async (req, res, next) => {
  const { id } = req.params;
  
  const author = await Author.findById(id);
  
  if (author.error) return next(author.error);
  
  res.status(200).json(author);
};

// const create = async (req, res) => {
//   const { firstName, middleName, lastName } = req.body;

//   const author = await Author.createAuthor(firstName, middleName, lastName);
  
//   if (!author) return res.status(400).json({ message: 'Invalid data' });
  
//   res.status(201).json(author);
// };

module.exports = {
  getAll,
  findById,
  // create,
  createAuthor,
};