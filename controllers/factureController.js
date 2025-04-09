const db = require('../db');

exports.getAllFactures = (req, res) => {
    db.query('SELECT * FROM facture', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

exports.getFactureById = (req, res) => {
    db.query('SELECT * FROM facture WHERE idFacture = ?', [req.params.id], (err, results) => {
        if (err) return res.status(500).json(err);
        if (results.length === 0) return res.status(404).json({ message: 'Facture non trouvée' });
        res.json(results[0]);
    });
};

exports.createFacture = (req, res) => {
    const { paiementId, dateEmission, montantTotal } = req.body;
    db.query(
        'INSERT INTO facture (paiementId, dateEmission, montantTotal) VALUES (?, ?, ?)',
        [paiementId, dateEmission, montantTotal],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.status(201).json({ id: result.insertId, message: 'Facture créée' });
        }
    );
};

exports.updateFacture = (req, res) => {
    const { paiementId, dateEmission, montantTotal } = req.body;
    db.query(
        'UPDATE facture SET paiementId = ?, dateEmission = ?, montantTotal = ? WHERE idFacture = ?',
        [paiementId, dateEmission, montantTotal, req.params.id],
        (err) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Facture mise à jour' });
        }
    );
};

exports.deleteFacture = (req, res) => {
    db.query('DELETE FROM facture WHERE idFacture = ?', [req.params.id], (err) => {
        if (err) return res.status(500).json(err);
        res.json({ message: 'Facture supprimée' });
    });
};