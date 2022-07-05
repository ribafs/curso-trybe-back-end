const connection = require('./connections');

// cria a chave fullName
// const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
//   const fullName = [firstName, middleName, lastName]
//     // filtra apenas nomes diferentes de null ou ""
//     .filter((name) => name)
//     // junta os nomes com um espaço entre eles
//     .join(' ');
//   return {
//     id,
//     firstName,
//     middleName,
//     lastName,
//     fullName,
//   };
// };

// valida o nome do autor
// const isValid = (firstName, _middleName, lastName) => {
//   if (!firstName || typeof firstName !== 'string') return false;
//   if (!lastName || typeof lastName !== 'string') return false;
//   if (middleName && typeof lastName !== 'string') return false;

//   return true;
// };

// método para mudar as keys de snake_case para camelCase
// const serialize = (authorData) => ({
//     id: authorData.id,
//     firstName: authorData.first_name,
//     middleName: authorData.middle_name,
//     lastName: authorData.last_name,
//   });

// faz a requisição e retorna todos os autores cadastrados no banco de dados
// const getAll = async () => {
//   const [authors] = await connection.execute('SELECT * FROM model_example.authors');
//   // desconstruimos a resposta para obter apenas os dados que desejamos

//   return authors.map(serialize).map(getNewAuthor);
// };
const getAll = async () => {
  const [authors] = await connection.execute(`
    SELECT 
      id, 
      first_name AS fistName,
      middle_name AS middleName, 
      last_name AS lastName, 
      contact,
      CONCAT(first_name, " ", first_name, " ", last_name) AS fullName
    FROM model_example.authors AS aut
    JOIN model_example.contacts AS cont
    ON aut.id = cont.author_id;
  `);
  return authors;
};

// const findByName = async (firstName, middleName, lastName) => {
//   let query = 'SELECT * FROM model_example.authors';
//   if (middleName) {
//     query += ' WHERE first_name = ? AND middle_name = ? AND last_name = ?;';
//   } else {
//     query += ' WHERE first_name = ? AND last_name = ?;';
//   }
//   const params = middleName ? [firstName, middleName, lastName] : [firstName, lastName];
//   const [authorData] = await connection.execute(query, params);
//   if (authorData.length === 0) return null;
//   return authorData.map(serialize).map(getNewAuthor);
// };
const findByName = async (firstName, middleName, lastName) => {
  let query = `
    SELECT id, 
      first_name AS fistName,
      middle_name AS middleName, 
      last_name AS lastName, contact,
      CONCAT(first_name, " ", first_name, " ", last_name) AS fullName
    FROM model_example.authors AS aut
    JOIN model_example.contacts AS cont
    ON aut.id = cont.author_id
    WHERE first_name = ? AND
  `;

  query += middleName ? ' middle_name = ? AND last_name = ?' : ' last_name = ?';

  const params = middleName ? [firstName, middleName, lastName] : [firstName, lastName];
  const [authorData] = await connection.execute(query, params);

  if (authorData.length === 0) return null;
  return authorData;
};

// faz a requisição e retorna o autor procurado pelo id
// const findById = async (id) => {
//   const [authorData] = await connection
//     .execute('SELECT * FROM model_example.authors WHERE id = ?', [id]);

//   if (authorData.length === 0) return null;

//   const { firstName, middleName, lastName } = authorData.map(serialize)[0];

//   return getNewAuthor({
//     id,
//     firstName,
//     middleName,
//     lastName,
//   });
// };
const findById = async (id) => {
  const query = `
    SELECT 
      id, 
      first_name AS fistName,
      middle_name AS middleName, 
      last_name AS lastName, 
      contact,
      CONCAT(first_name, " ", first_name, " ", last_name) AS fullName
    FROM model_example.authors AS aut
    JOIN model_example.contacts AS cont
    ON aut.id = cont.author_id
    WHERE id = ?
  `;
  const [authorData] = await connection.execute(query, [id]);

  if (authorData.length === 0) return null;
  return authorData;
};

// const createAuthor = async (firstName, middleName, lastName) => connection.execute(
//   'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
//   [firstName, middleName, lastName],
// );
const createAuthor = async (firstName, middleName, lastName) => {
  const [author] = await connection.execute(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
    [firstName, middleName, lastName],
  );
  return ({ id: author.insertId, firstName, middleName, lastName });
};

module.exports = {
  getAll,
  findByName,
  findById,
  // isValid,
  createAuthor,
};