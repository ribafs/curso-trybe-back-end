const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const port = 3000;
// pode ser escrito da seguinte forma também:
// const port = process.env.PORT || 3000;

const Author = require('./models/Author');
const Books = require('./models/Book');

app.use(bodyParser.json());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  return res.status(200).json(author);
});

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
});

app.post('/authors', async (req, res) => {
  const { firstName, middleName, lastName } = req.body;

  if (!Author.isValid(firstName, middleName, lastName)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Author.create(firstName, middleName, lastName);

  return res.status(201).json({ message: 'Autor criado com sucesso' });
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Books.findById(id);

  if (!book) return res.status(404).json({ message: 'Not found' });

  return res.status(200).json(book);
});

app.get('/books/search', async (req, res) => {
  const { author } = req.query;
  const books = await Books.getByAuthorId(Number(author));
  res.status(200).json(books);
});

app.get('/books', async (_req, res) => {
  const books = await Books.getAll();
  res.status(200).json(books);
});

app.post('/books', async (req, res) => {
  const { title, authorId } = req.body;

  // verifica se existe o id do autor
  const authorsId = await Author.getAll();
  const authorOk = authorsId.some((author) => Number(author.id) === Number(authorId));
  if (authorId === '' || !authorOk) return res.status(400).json({ message: 'Dados inválidos' });

  await Books.create(title, authorId);

  return res.status(201).json({ message: 'Livro criado com sucesso' });
});
