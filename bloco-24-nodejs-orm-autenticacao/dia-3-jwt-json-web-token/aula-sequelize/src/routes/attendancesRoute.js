const { Router } = require('express');
const attendanceController = require('../controllers/attendancesController');

const attandanceRoute = Router();

attandanceRoute.post('/', attendanceController.add);

module.exports = attandanceRoute;