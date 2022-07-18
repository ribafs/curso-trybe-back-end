const { Router } = require('express');
const petsController = require('../controllers/petsController');

const petsRoute = Router();

petsRoute.get('/:id', petsController.get);
petsRoute.get('/', petsController.list);
petsRoute.post('/', petsController.add);

module.exports = petsRoute;