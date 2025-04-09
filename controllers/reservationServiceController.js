const db = require('../db');

exports.getAllReservationsService = (req, res) => {
    db.query('SELECT * FROM reservation_service', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

exports.getReservationsByServiceId = (req, res) => {
    db.query('SELECT * FROM reservation_service WHERE serviceId = ?', [req.params.serviceId], (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

exports.getServicesByReservationId = (req, res) => {
    db.query('SELECT * FROM reservation_service WHERE reservationId = ?', [req.params.reservationId], (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

exports.createReservationService = (req, res) => {
    const { reservationId, serviceId } = req.body;
    db.query(
        'INSERT INTO reservation_service (reservationId, serviceId) VALUES (?, ?)',
        [reservationId, serviceId],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.status(201).json({ message: 'Association réservation-service créée' });
        }
    );
};

exports.deleteReservationService = (req, res) => {
    const { reservationId, serviceId } = req.params;
    db.query(
        'DELETE FROM reservation_service WHERE reservationId = ? AND serviceId = ?',
        [reservationId, serviceId],
        (err) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Association réservation-service supprimée' });
        }
    );
};