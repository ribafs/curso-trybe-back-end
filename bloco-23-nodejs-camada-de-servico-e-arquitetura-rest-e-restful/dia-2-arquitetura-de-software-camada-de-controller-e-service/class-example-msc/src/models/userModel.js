const db = require('./db');

const userModel = {
  exists: async (id) => {
    const existsSql = 'SELECT 1 FROM db.user WHERE id = ?;';
    const [[exists]] = await db.query(existsSql, [id]);
    return Boolean(exists);
  },
  get: async (id) => {
    const getSql = 'SELECT * FROM db.user WHERE id = ?;';
    const [[item]] = await db.query(getSql, [id]);
    return item;
  },
};

module.exports = userModel;