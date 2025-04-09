const db = require('../db');

// Récupérer toutes les chambres
exports.getAllChambres = (req, res) => {
  db.query('SELECT * FROM Chambre', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// Ajouter une nouvelle chambre
exports.createChambre = (req, res) => {
  const { type, prixParNuit, disponibilite } = req.body;

  db.query(
    'INSERT INTO Chambre (type, prixParNuit, disponibilite) VALUES (?, ?, ?)',
    [type, prixParNuit, disponibilite],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Chambre ajoutée avec succès', id: result.insertId });
    }
  );
};

// Récupérer une chambre par ID
exports.getChambreById = (req, res) => {
  const { id } = req.params;

  db.query('SELECT * FROM Chambre WHERE idChambre = ?', [id], (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0) return res.status(404).json({ message: 'Chambre non trouvée' });
    res.json(results[0]);
  });
};

// Mettre à jour une chambre par ID
exports.updateChambre = (req, res) => {
  const { id } = req.params;
  const { type, prixParNuit, disponibilite } = req.body;

  db.query(
    'UPDATE Chambre SET type = ?, prixParNuit = ?, disponibilite = ? WHERE idChambre = ?',
    [type, prixParNuit, disponibilite, id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: 'Chambre mise à jour avec succès' });
    }
  );
};

// Supprimer une chambre
exports.deleteChambre = (req, res) => {
  const { id } = req.params;

  db.query('DELETE FROM Chambre WHERE idChambre = ?', [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Chambre supprimée avec succès' });
  });
};
