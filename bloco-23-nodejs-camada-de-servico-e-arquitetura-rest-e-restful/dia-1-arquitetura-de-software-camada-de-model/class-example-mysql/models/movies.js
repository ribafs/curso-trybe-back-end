const connection = require('./connections');

const moviesModel = {
  getMovie: async (id) => {
    if (!id) {
      const getSql = 'select * from db.movies;';
      const [items] = await connection.query(getSql);
      return items;
    }
    const getSql = 'select * from db.movies where id = ?;';
    const [[item]] = await connection.query(getSql, [id]);
    return item;
  },
  addMovie: async (name, year) => {
    const addSql = 'insert into db.movies (name, year) values (?, ?);';
    const result = await connection.query(addSql, [name, year]);
    const status = result[0];
    const { insertId } = status;
    return insertId;
  },
  editMovie: async (id, changes) => {
    const updatedSql = 'update db.movies set ? where id = ?;';
    const result = await connection.query(updatedSql, [changes, id]);
    const status = result[0];
    const { affectedRows } = status;
    return Boolean(affectedRows);
    // return !!affectedRows;
  },
  delMovie: async (id) => {
    const delSql = 'delete from db.movies where id = ?;';
    const result = await connection.query(delSql, [id]);
    const status = result[0];
    const { affectedRows } = status;
    return Boolean(affectedRows);
  },
};

module.exports = moviesModel;
