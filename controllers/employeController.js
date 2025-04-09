const db = require('../db');

// Afficher tous les EMPLOYE
exports.getAllEmploye = (req,res) =>{
    db.query('SELECT * FROM EMPLOYE', (err,results) =>{
        if(err)
            return res.status(500).json(err);
        res.json(results);
    });
};

// Create employee
exports.createEmploye = (req,res) => {
    const {nomComplet, email, motDePasse, telephone}=req.body;

    db.query(
        'INSERT INTO CLIENT(nomComplet, email, motDePasse, telephone) VALUES (?,?,?,?)',
        [nomComplet, email, motDePasse, telephone],
        (err,results) => {
            if (err) 
                return res.status(500).json(err);
            res.json({message:'Client ajouté avec succès' , id: results.insertId});

        }

    );
};


// Recupérer un employée by ID 
exports.getEmployeByID = (req,res) => {
    const {id}= req.params;

   db.query('SELECT * FROM EMPLOYE WHERE ID=?',
    [id],
    (err,results) => {
        if(err)
            return res.status(500).json(err);
        if(results.length === 0) 
            return res.status(404).json({message:'employé non trouvé'});
        res.json(results[0]);
    }
   );
};

//Supprimer un Employe
exports.deleteEmploye = (req,res) => {
    const {id} = res.params;
    
    db.query(
        'SELECT * FROM EMPLOYE WHERE ID=?', 
        [id],
        (err,results) =>{
            if (err)
                return res.status(500).json(err);
            res.json({message:'Reservation supprimer avec succées'});
        });
};

