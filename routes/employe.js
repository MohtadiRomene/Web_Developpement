const express = require('express');
const router = express.Router();
const employeController = require('../controllers/employeController.js');

router.get('./',employeController.getAllEmploye);

router.post('./',employeController.createEmploye);

router.get('./:id',employeController.getEmployeByID);

router.delete('./:id',employeController.deleteEmploye);

module.exports = router;