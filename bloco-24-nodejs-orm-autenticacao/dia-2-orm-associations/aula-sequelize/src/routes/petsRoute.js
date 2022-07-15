const { Router } = require('express');
const petsController = require('../controllers/petsController');

const petsRoute = Router();

// petsRoute.get('/', petsController.list);
petsRoute.get('/:id', petsController.get);
petsRoute.post('/', petsController.add);

module.exports = petsRoute;