const attendanceService = require('../services/attendancesService');

const attendanceController = {
  /** @type {import('express').RequestHandler} */
  add: async (req, res) => {
    const data = await attendanceService.boddyAddValidate(req.body);
    const attendance = await attendanceService.add(data);
    res.status(200).json(attendance);    
  },
};

module.exports = attendanceController;