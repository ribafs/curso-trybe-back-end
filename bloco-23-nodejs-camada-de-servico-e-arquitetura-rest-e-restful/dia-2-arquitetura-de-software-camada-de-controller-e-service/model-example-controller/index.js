const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const app = express();
const port = 3000;
// pode ser escrito da seguinte forma também:
// const port = process.env.PORT || 3000;

const Author = require('./controllers/AuthorsController');
const Books = require('./controllers/BooksController');
const errorMiddleware = require('./middlewares/error');

app.use(bodyParser.json());
app.use(errorMiddleware);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/authors/:id', rescue(Author.findById));

app.get('/authors', rescue(Author.getAll));

app.post('/authors', rescue(Author.createAuthor));

app.get('/books/:id', Books.findById);

app.get('/books/search', Books.getByAuthorId);

app.get('/books', Books.getAll);

app.post('/books', Books.createBook);
