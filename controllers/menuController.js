const db = require('../db');

exports.getAllMenus = (req, res) => {
    db.query('SELECT * FROM menu', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

exports.getMenuById = (req, res) => {
    db.query('SELECT * FROM menu WHERE idMenu = ?', [req.params.id], (err, results) => {
        if (err) return res.status(500).json(err);
        if (results.length === 0) return res.status(404).json({ message: 'Menu non trouvé' });
        res.json(results[0]);
    });
};

exports.createMenu = (req, res) => {
    const { restaurantId, plat, prix } = req.body;
    db.query(
        'INSERT INTO menu (restaurantId, plat, prix) VALUES (?, ?, ?)',
        [restaurantId, plat, prix],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.status(201).json({ id: result.insertId, message: 'Menu créé' });
        }
    );
};

exports.updateMenu = (req, res) => {
    const { restaurantId, plat, prix } = req.body;
    db.query(
        'UPDATE menu SET restaurantId = ?, plat = ?, prix = ? WHERE idMenu = ?',
        [restaurantId, plat, prix, req.params.id],
        (err) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Menu mis à jour' });
        }
    );
};

exports.deleteMenu = (req, res) => {
    db.query('DELETE FROM menu WHERE idMenu = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Menu supprimé' });
    });
};