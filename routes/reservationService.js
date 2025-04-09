const express = require('express');
const router = express.Router();
const reservationServiceController = require('../controllers/reservationServiceController');

router.get('/', reservationServiceController.getAllReservationsService);
router.get('/service/:serviceId', reservationServiceController.getReservationsByServiceId);
router.get('/reservation/:reservationId', reservationServiceController.getServicesByReservationId);
router.post('/', reservationServiceController.createReservationService);
router.delete('/:reservationId/:serviceId', reservationServiceController.deleteReservationService);

module.exports = router;