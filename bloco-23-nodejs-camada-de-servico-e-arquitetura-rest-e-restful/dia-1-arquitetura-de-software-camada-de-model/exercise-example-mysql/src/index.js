const express = require('express');
const validData = require('../middlewares/dataValidation');
const validPass = require('../middlewares/passValidation');
const users = require('../models/users');

const NAO_ENCONTRADO = { message: 'User not found' };

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('Rodando na porta 3000'));

/* 
  {
    "firstName": "Calebe",
    "lastName": "Junior",
    "email": "calebe.junior@gmail.com",
    "password": "d496d5ea2442"
  }
*/

// put /user:id
app.put('/user/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const changes = req.body;

    const oldUser = await users.getUser(id);
    if (!oldUser) return res.status(404).json(NAO_ENCONTRADO);

    const updated = await users.editUser(id, changes);
    if (!updated) return res.status(400).json({ message: 'Update error' });

    const newUser = await users.getUser(id);
    if (!newUser) return res.status(404).json(NAO_ENCONTRADO);

    res.json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// post /user
app.post('/user', validData, validPass, async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await users.addUser(userData);
    const user = await users.getUser(newUser);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get /user/:id
app.get('/user/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await users.getUser(id);
    if (!user) return res.status(404).json(NAO_ENCONTRADO);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get /user
app.get('/user', async (_req, res) => {
  try {
    const user = await users.getUser();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
