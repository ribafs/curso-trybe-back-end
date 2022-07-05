const connection = require('./connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const sql = 'INSERT INTO model_example.movies (title, diracted_by, release_year) VALUES (?, ?, ?);';
  const [result] = await connection.execute(sql, [title, directedBy, releaseYear]);

  return {
    id: result.insertId,
  }
};

module.exports = {create};