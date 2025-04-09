const db = require('../db');
exports.getAllClients = (req, res) => {
    db.query('SELECT * FROM Client', (err, results) =>{
        if (err) 
            return res.status(500).json(err);
        res.json(results);
    });
};

exports.createClient = (req, res) => {
    const {nomComplet, email, motDePasse, telephone} = req.body;

  
    db.query(
        'INSERT INTO Client (nomComplet, email, motDePasse, telephone) VALUES (?, ?, ?, ?)',
        [nomComplet, email, motDePasse, telephone],
        (err, result) => {
          if (err) return res.status(500).json(err);
          res.json({ message: 'Client ajouté avec succès', id: result.insertId });
        }
      );
    };
