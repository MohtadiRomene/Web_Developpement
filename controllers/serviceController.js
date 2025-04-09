const db = require('../db');

exports.getAllServices = (req, res) => {
    db.query('SELECT * FROM service', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

exports.getServiceById = (req, res) => {
    db.query('SELECT * FROM service WHERE idService = ?', [req.params.id], (err, results) => {
        if (err) return res.status(500).json(err);
        if (results.length === 0) return res.status(404).json({ message: 'Service non trouvé' });
        res.json(results[0]);
    });
};

exports.createService = (req, res) => {
    const { nom, description, prix } = req.body;
    db.query(
        'INSERT INTO service (nom, description, prix) VALUES (?, ?, ?)',
        [nom, description, prix],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.status(201).json({ id: result.insertId, message: 'Service créé' });
        }
    );
};

exports.updateService = (req, res) => {
    const { nom, description, prix } = req.body;
    db.query(
        'UPDATE service SET nom = ?, description = ?, prix = ? WHERE idService = ?',
        [nom, description, prix, req.params.id],
        (err) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Service mis à jour' });
        }
    );
};

exports.deleteService = (req, res) => {
    db.query('DELETE FROM service WHERE idService = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Service supprimé' });
    });
};