const connection = require('./connections');

// método para mudar as keys de snake_case para camelCase
const serialize = (bookData) => ({
    id: bookData.id,
    title: bookData.title,
    authorId: bookData.author_id,
  });

// faz a requisição e retorna todos os livros cadastrados no banco de dados
const getAll = async () => {
  const [books] = await connection.execute('SELECT id, title, author_id FROM model_example.books');
  // desconstruimos a resposta para obter apenas os dados que desejamos
  return books.map(serialize);
};

// busca os livros de um autor
const getByAuthorId = async (id) => {
  const [books] = await connection
    .execute('SELECT id, title, author_id FROM model_example.books WHERE author_id = ?', [id]);
  return books.map(serialize);
};

const findById = async (id) => {
  const [book] = await connection
    .execute('SELECT id, title, author_id FROM model_example.books WHERE id = ?', [id]);

  if (book.length === 0) return null;

  return book.map(serialize);
};

const findByTitle = async (title) => {
  const query = 'SELECT * FROM model_example.books WHERE title = ?;';
  const [book] = await connection.execute(query, [title]);
  if (book.length === 0) return null;
  return book.map(serialize);
};

const create = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)',
  [title, authorId],
);

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  findByTitle,
  create,
};