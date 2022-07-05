// models/Contact.js

const connection = require('./connections');

const createContact = async (id, contact) =>
  connection.execute(
    'INSERT INTO model_example.contacts (author_id, contact) VALUES (?, ?)',
    [id, contact],
  );

module.exports = {
  createContact,
};