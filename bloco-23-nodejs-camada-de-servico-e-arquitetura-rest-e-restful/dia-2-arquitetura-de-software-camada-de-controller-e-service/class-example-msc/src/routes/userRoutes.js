const { Router } = require('express');
const userController = require('../controllers/userController');

const userRoutes = Router();

// removeUser
userRoutes.delete('/:id', async (req, res) => { });

// editUser
userRoutes.put('/:id', async (req, res) => {});

// getUser
userRoutes.get('/:id', userController.get);

// addUser
userRoutes.post('/:', async (req, res) => {});

// listUser
userRoutes.get('/:', async (req, res) => {}); 

module.exports = userRoutes;