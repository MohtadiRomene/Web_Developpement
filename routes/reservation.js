const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');


router.get('/', reservationController.getAllReservations);


router.post('/', reservationController.createReservation);


router.get('/:id', reservationController.getReservationById);


router.put('/:id', reservationController.updateReservation);


router.delete('/:id', reservationController.deleteReservation);

module.exports = router;
