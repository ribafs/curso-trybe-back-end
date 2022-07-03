const express = require('express');
const movies = require('../models/movies');

const app = express();
app.use(express.json());

const MOVIES_ID = '/movies/:id';
const MOVIES = '/movies';

const NAO_ENCONTRADO = { message: 'id não encontrado' };

// removeMovie
app.delete(MOVIES_ID, async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await movies.delMovie(id);
    if (deleted) return res.sendStatus(204);
    res.status(404).json(NAO_ENCONTRADO);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// editMovie
app.put(MOVIES_ID, async (req, res) => {
  try {
    const { id } = req.params;
    const changes = req.body;

    const oldItem = await movies.getMovie(id);
    if (!oldItem) return res.status(404).json(NAO_ENCONTRADO);

    const updated = await movies.editMovie(id, changes);
    if (!updated) return res.status(400).json({ message: 'Erro ao alterar' });

    const newItem = await movies.getMovie(id);
    if (!newItem) return res.status(404).json(NAO_ENCONTRADO);

    res.json(newItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// getMovie
app.get(MOVIES_ID, async (req, res) => {
  try {
    const { id } = req.params;
    const item = await movies.getMovie(id);
    if (!item) return res.status(404).json(NAO_ENCONTRADO);
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// getAllMovies
app.get(MOVIES, async (_req, res) => {
  try {
    const items = await movies.getMovie();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// addMovie
app.post(MOVIES, async (req, res) => {
  try {
    const { name, year } = req.body;
    const inserted = await movies.addMovie(name, year);
    const item = await movies.getMovie(inserted);
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(3001, () => console.log('Rodando na porta 3001'));
