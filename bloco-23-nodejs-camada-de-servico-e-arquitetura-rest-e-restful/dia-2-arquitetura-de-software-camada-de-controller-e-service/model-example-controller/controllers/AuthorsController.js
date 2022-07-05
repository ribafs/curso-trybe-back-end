const Joi = require('joi');
const Author = require('../services/Authors');

const createAuthor = async (req, res, next) => {
  const { firstName, middleName, lastName, contacts } = req.body;

  const { error } = Joi.object({
    firstName: Joi.string().not().empty().required(),
    lastName: Joi.string().not().empty().required(),
    contacts: Joi.array().items(Joi.string().length(15).required()).min(1).required(),
  }).validate({ firstName, lastName, contacts });

  if (error) return next(error);

  const newAuthor = await Author.createAuthor(firstName, middleName, lastName, contacts);
  
  if (newAuthor.error) return next(newAuthor.error);

  return res.status(201).json(newAuthor);
};

const getAll = async (_req, res) => {
  const authors = await Author.getAll();

  return res.status(200).json(authors);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  return res.status(200).json(author);
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};