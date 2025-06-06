const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController.js');

router.get('/',clientController.getAllClients);
router.post('/',clientController.createClient);

module.exports = router;