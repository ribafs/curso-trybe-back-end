const express = require('express');
const bodyParser = require('body-parser');

// entra em contato apenas com o controller
const Author = require ('./controllers/Author');

const app = express();

app.use(bodyParser.json());


app.get('/authors/:id', Author.findById);

app.get('./authors', Author.getAll);

app.post('/authors', Author.create);

const PORT = 3000;

app.listeners(PORT, () => console.log(`Listening to port ${PORT}`));