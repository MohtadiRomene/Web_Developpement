const db = require('../db');

exports.getAllReservationsRestaurant = (req, res) => {
    db.query('SELECT * FROM reservation_restaurant', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

exports.getReservationRestaurantById = (req, res) => {
    db.query('SELECT * FROM reservation_restaurant WHERE idReservation = ?', [req.params.id], (err, results) => {
        if (err) return res.status(500).json(err);
        if (results.length === 0) return res.status(404).json({ message: 'Réservation restaurant non trouvée' });
        res.json(results[0]);
    });
};

exports.createReservationRestaurant = (req, res) => {
    const { clientId, restaurantId, dateReservation, nombrePersonnes } = req.body;
    db.query(
        'INSERT INTO reservation_restaurant (clientId, restaurantId, dateReservation, nombrePersonnes) VALUES (?, ?, ?, ?)',
        [clientId, restaurantId, dateReservation, nombrePersonnes],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.status(201).json({ id: result.insertId, message: 'Réservation restaurant créée' });
        }
    );
};

exports.updateReservationRestaurant = (req, res) => {
    const { clientId, restaurantId, dateReservation, nombrePersonnes } = req.body;
    db.query(
        'UPDATE reservation_restaurant SET clientId = ?, restaurantId = ?, dateReservation = ?, nombrePersonnes = ? WHERE idReservation = ?',
        [clientId, restaurantId, dateReservation, nombrePersonnes, req.params.id],
        (err) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Réservation restaurant mise à jour' });
        }
    );
};

exports.deleteReservationRestaurant = (req, res) => {
    db.query('DELETE FROM reservation_restaurant WHERE idReservation = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Réservation restaurant supprimée' });
    });
};