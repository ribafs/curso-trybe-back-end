const express = require('express');
const connection = require('../models/connections');

const app = express();
app.use(express.json());

const MOVIES_ID = '/movies/:id';
const MOVIES = '/movies';

const GET_SQL = 'select * from db.movies where id = ?;';

const NAO_ENCONTRADO = { message: 'id não encontrado' };

// removeMovie
app.delete(MOVIES_ID, async (req, res) => {
  try {
    const { id } = req.params;
    const sql = 'delete from db.movies where id = ?;';
    const result = await connection.query(sql, [id]);
    const status = result[0];
    const { affectedRows } = status;
    if (affectedRows > 0) return res.sendStatus(204);
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

    const [[oldItem]] = await connection.query(GET_SQL, [id]);
    if (!oldItem) return res.status(404).json(NAO_ENCONTRADO);
    const updatedSql = 'update db.movies set ? where id = ?;';
    const result = await connection.query(updatedSql, [changes, id]);
    const status = result[0];
    const { affectedRows } = status;
    if (affectedRows === 0) return res.status(400).json({ message: 'Erro ao alterar' });
    const [[newItem]] = await connection.query(GET_SQL, [id]);
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
    const sql = 'select * from db.movies where id = ?;';
    const [[item]] = await connection.query(sql, [id]);
    if (!item) return res.status(404).json(NAO_ENCONTRADO);
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// getAllMovies
app.get(MOVIES, async (_req, res) => {
  try {
    const sql = 'select * from db.movies;';
    const [items] = await connection.query(sql);
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// addMovie
app.post(MOVIES, async (req, res) => {
  try {
    const { name, year } = req.body;
    const sql = 'insert into db.movies (name, year) values (?, ?);';
    const result = await connection.query(sql, [name, year]);
    const status = result[0];
    const { insertId } = status;

    const [[item]] = await connection.query(GET_SQL, [insertId]);
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(3001, () => console.log('Rodando na porta 3001'));
