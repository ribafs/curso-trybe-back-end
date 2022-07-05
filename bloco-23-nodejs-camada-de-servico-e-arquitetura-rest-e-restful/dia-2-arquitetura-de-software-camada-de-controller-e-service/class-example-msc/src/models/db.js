const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'trybe',
  password: 'Trybe@123',
  database: 'db',
});

module.exports = db;