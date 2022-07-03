const mysql = require('mysql2/promise');

// cria uma pool de conexões com o bd
const connection = mysql.createPool({
  user: 'trybe',
  password: 'Trybe@123',
  host: 'localhost',
  database: 'db',
});

module.exports = connection;