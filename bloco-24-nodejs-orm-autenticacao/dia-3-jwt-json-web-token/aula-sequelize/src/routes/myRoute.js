const { Router } = require('express');
const myController = require('../controllers/myController');

const myRoute = Router();

myRoute.get('/pets', myController.getPets);

module.exports = myRoute;