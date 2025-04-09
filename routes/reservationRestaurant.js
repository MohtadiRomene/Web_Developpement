const express = require('express');
const router = express.Router();
const reservationRestaurantController = require('../controllers/reservationRestaurantController');

router.get('/', reservationRestaurantController.getAllReservationsRestaurant);
router.get('/:id', reservationRestaurantController.getReservationRestaurantById);
router.post('/', reservationRestaurantController.createReservationRestaurant);
router.put('/:id', reservationRestaurantController.updateReservationRestaurant);
router.delete('/:id', reservationRestaurantController.deleteReservationRestaurant);

module.exports = router;