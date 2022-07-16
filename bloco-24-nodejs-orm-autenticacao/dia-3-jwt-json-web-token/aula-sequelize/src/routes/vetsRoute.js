const { Router } = require('express');
const vetController = require('../controllers/vetsController');

const vetsRoute = Router();

vetsRoute.get('/:id/pets', vetController.getPetsByVet);

module.exports = vetsRoute;