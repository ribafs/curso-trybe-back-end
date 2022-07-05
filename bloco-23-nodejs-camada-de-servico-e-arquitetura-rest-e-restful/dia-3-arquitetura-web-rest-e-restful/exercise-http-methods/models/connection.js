const mysql = require('mysql2/promise');

const connecton = mysql.createPool({
  host: 'localhost',
  user: 'trybe',
  password: 'Trybe@123',
  database: 'rest_exercicios',
});

module.exports = connecton;