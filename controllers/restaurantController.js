const db = require('../db');

exports.getAllRestaurants = (req, res) => {
    db.query('SELECT * FROM restaurant', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

exports.getRestaurantById = (req, res) => {
    db.query('SELECT * FROM restaurant WHERE idRestaurant = ?', [req.params.id], (err, results) => {
        if (err) return res.status(500).json(err);
        if (results.length === 0) return res.status(404).json({ message: 'Restaurant non trouvé' });
        res.json(results[0]);
    });
};

exports.createRestaurant = (req, res) => {
    const { capacite } = req.body;
    db.query(
        'INSERT INTO restaurant (capacite) VALUES (?)',
        [capacite],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.status(201).json({ id: result.insertId, message: 'Restaurant créé' });
        }
    );
};

exports.updateRestaurant = (req, res) => {
    const { capacite } = req.body;
    db.query(
        'UPDATE restaurant SET capacite = ? WHERE idRestaurant = ?',
        [capacite, req.params.id],
        (err) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Restaurant mis à jour' });
        }
    );
};

exports.deleteRestaurant = (req, res) => {
    db.query('DELETE FROM restaurant WHERE idRestaurant = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Restaurant supprimé' });
    });
};