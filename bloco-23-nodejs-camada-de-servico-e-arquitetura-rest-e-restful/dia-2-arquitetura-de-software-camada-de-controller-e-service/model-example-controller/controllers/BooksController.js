// const Joi = require('joi');
const Book = require('../services/Books');
const Author = require('../services/Authors');

const createBook = async (req, res) => {
  const { title, authorId } = req.body;

  // verifica se existe o id do autor
  const authorsId = await Author.getAll();
  const authorOk = authorsId.some((author) => Number(author.id) === Number(authorId));

  // const { error } = Joi.object({
  //   authorId: Joi.required(),
  // }).validade({ authorId });
  
  if (authorId === '' || !authorOk) return res.status(400).json({ message: 'Dados inválidos' });

  await Book.create(title, authorId);

  return res.status(201).json({ message: 'Livro criado com sucesso' });
};

const getAll = async (_req, res) => {
  const books = await Book.getAll();

  return res.status(200).json(books);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);

  if (!book) return res.status(404).json({ message: 'Not found' });

  return res.status(200).json(book);
};

const getByAuthorId = async (req, res) => {
  const { author } = req.query;
  const books = await Book.getByAuthorId(Number(author));
  res.status(200).json(books);
};

module.exports = {
  getAll,
  createBook,
  findById,
  getByAuthorId,
};