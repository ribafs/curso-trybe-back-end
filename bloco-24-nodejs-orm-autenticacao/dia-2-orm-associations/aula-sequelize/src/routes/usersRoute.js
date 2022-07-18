const { Router } = require('express');
const usersController = require('../controllers/usersController');

const usersRoute = Router();

usersRoute.get('/:id', usersController.get);
usersRoute.get('/', usersController.list);
usersRoute.post('/', usersController.add);

module.exports = usersRoute;