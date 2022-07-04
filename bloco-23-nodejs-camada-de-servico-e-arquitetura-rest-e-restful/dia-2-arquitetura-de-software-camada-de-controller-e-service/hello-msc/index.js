const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

// entra em contato apenas com o controller
const Author = require('./controllers/Author');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(bodyParser.json());

app.get('/authors/:id', rescue(Author.findById));

app.get('./authors', rescue(Author.getAll));

app.post('/authors', rescue(Author.createAuthor));

app.use(errorMiddleware);

const PORT = 3000;

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));