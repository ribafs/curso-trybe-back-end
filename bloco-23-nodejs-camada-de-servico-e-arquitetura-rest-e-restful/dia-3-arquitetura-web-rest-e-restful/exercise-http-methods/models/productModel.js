const connection = require('./connection');

const prodModel = {
  add: async (name, brand) => {
    try {
      const sql = 'INSERT INTO rest_exercicios.products (name, brand) VALUES (?, ?);';
      const [result] = await connection.query(sql, [name, brand]);
      return { id: result.insertId, name, brand };
    } catch (error) {
      console.error(error);
      return process.exit(1);
    };
  },
  getAll: async () => {
    try {
      const sql = 'SELECT * FROM rest_exercicios.products;';
      const [rows] = await connection.query(sql);
      return rows;
    } catch (error) {
      console.error(error);
      return process.exit(1);
    };
  },
  getById: async (id) => {
    try {
      const sql = 'SELECT * FROM rest_exercicios.products WHERE id = ?;';
      const [result] = await connection.query(sql, [id]);
      if (!result.length) return null;
      return result[0];
    } catch (error) {
      console.error(error);
      return process.exit(1);
    };
  },
  update: async (id, name, brand) => {
    try {
      const sql = 'UPDATE rest_exercicios.products SET name = ?, brand = ? WHERE id = ?;';
      const [result] = await connection.query(sql, [name, brand, id]);
      return result;
    } catch (error) {
      console.error(error);
      return process.exit(1);
    };
  },
  exclude: async (id) => {
    try {
      const sql = 'DELETE FROM rest_exercicios.products WHERE id = ?;';
      const product = await this.getById(id);
      if (!product) return {};
      await connection.query(sql, [id]);
    } catch (error) {
      console.error(error);
      return process.exit(1);
    }
  },
};

module.exports = prodModel;