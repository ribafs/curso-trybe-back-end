const connection = require('./connections');

const userModel = {
  addUser: async (userData) => {
    const { firstName, lastName, email, password } = userData;
    const cols = 'firstName, lastName, email, password';
    const addSql = `insert into db.user (${cols}) values (?, ?, ?, ?);`;
    const result = await connection.query(
        addSql,
        [firstName, lastName, email, password],
      );
    const status = result[0];
    const { insertId } = status;
    return insertId;
  },
  getUser: async (id) => {
    if (!id) {
      const getSql = 'select * from db.user;';
      const [users] = await connection.query(getSql);
      const allUsers = users.map((elem) => {
        const { firstName, lastName, email } = elem;
        return { id: elem.id, firstName, lastName, email };
      });
      return allUsers;
    }
    const getSql = 'select * from db.user where id = ?;';
    const [[user]] = await connection.query(getSql, [id]);
    if (!user) return undefined;
    const { firstName, lastName, email } = user;
    return { id, firstName, lastName, email };
  },
  editUser: async (id, changes) => {
    const updateSql = 'update db.user set ? where id = ?;';
    const result = await connection.query(updateSql, [changes, id]);
    const status = result[0];
    const { affectedRows } = status;
    return Boolean(affectedRows);
  },
};

module.exports = userModel;