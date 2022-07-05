const Book = require('../models/Book');

const getAll = async () => Book.getAll();

const create = async (title, authorId) => {
  const existingBook = await Book.findByTitle(title);
  if (existingBook) {
    return {
      error: {
        code: 'alreadyExixts',
        message: 'Um livro com esse título já exixte',
      },
    };
  }
  return Book.create(title, authorId);
};

const findById = async (id) => {
  const book = await Book.findById(id);
  if (!book) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar um livro com o id ${id}`,
      },
    };
  }
  return book;
};

const getByAuthorId = async (id) => Book.getByAuthorId(id);

module.exports = {
  getAll,
  create,
  findById,
  getByAuthorId,
};