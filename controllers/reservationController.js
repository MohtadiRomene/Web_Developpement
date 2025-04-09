const db = require('../db');

// Récupérer toutes les réservations
exports.getAllReservations = (req, res) => {
  db.query('SELECT * FROM Reservation', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// Ajouter une nouvelle réservation
exports.createReservation = (req, res) => {
  const { clientId, chambreId, dateArrivee, dateDepart } = req.body;

  db.query(
    'INSERT INTO Reservation (clientId, chambreId, dateArrivee, dateDepart) VALUES (?, ?, ?, ?)',
    [clientId, chambreId, dateArrivee, dateDepart],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Réservation ajoutée avec succès', id: result.insertId });
    }
  );
};

// Récupérer une réservation par ID
exports.getReservationById = (req, res) => {
  const { id } = req.params;

  db.query('SELECT * FROM Reservation WHERE idReservation = ?', [id], (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0) return res.status(404).json({ message: 'Réservation non trouvée' });
    res.json(results[0]);
  });
};

// Mettre à jour une réservation par ID
exports.updateReservation = (req, res) => {
  const { id } = req.params;
  const { clientId, chambreId, dateArrivee, dateDepart } = req.body;

  db.query(
    'UPDATE Reservation SET clientId = ?, chambreId = ?, dateArrivee = ?, dateDepart = ? WHERE idReservation = ?',
    [clientId, chambreId, dateArrivee, dateDepart, id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Réservation mise à jour avec succès' });
    }
  );
};

// Supprimer une réservation
exports.deleteReservation = (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM Reservation WHERE idReservation = ?', [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Réservation supprimée avec succès' });
  });
};
