const db =require('../db');

//Afficher tous les paiements
exports.getALLPaiement = (req,res) => {
    db.query(
        'SELECT * FROM PAIEMENT',
        (err,res)=>{
            if(err)
                return res.status(500).json(err);
            return res.json(results);
        }
    );
};


//Creer un nouveau paiement
exports.createPaiement = (req,res)=>{
    const {reservationId, montant, modePaiement, datePaiement} = req.body;

    db.query(
        'INSERT INTO PAIEMENT (reservationId, montant, modePAiement, datePaiement) VALUES (?,?,?,?)',
        [reservationId, montant, modePaiement, datePaiement],
        (err,res) => {
            if(err)
                return res.status(500).json(err);
            return res.json({message:'Paiement Enregistrer',id: result.insertId})
        }
    );
};


// Update Paiement 
exports.updatePaiement = (req,res) =>{
    const {reservationId, montant, modePAiement, datePaiement} = req.body;

    db.query(
        'UPDATE PAIEMENT SET reservationId=?, montant=?, modePAiement=?, datePaiement=? WHERE idPaiement=?',
        [reservationId, montant, modePAiement, datePaiement,req.params.id],
        (err,res) => {
            if(err)
                return res.status(500).json(err);
            return res.json({message:'Paiement mise à jour'});
        }
    );
};





// Afficher le paiement Par ID
exports.getPaiementByID = (req,res) => {
    const {id} = req.params;
    db.query(
        'SELECT * FROM PAIEMENT WHERE ID=?',
        [id],
        (err,res)=>{
            if (err)
                return res.status(500).json(err);
            res.json(results[0]);
        }
    );
};


//Supprimer un paiement
exports.deletePaiement = (req, res) => {
    db.query('DELETE FROM paiement WHERE idPaiement = ?', [req.params.id], (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Paiement supprimé' });
    });
  };