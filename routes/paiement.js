const express = require('express');
const router = express.Router();
const PaiementController = require('../controllers/paiementController.js');

router.get('./',PaiementController.getALLPaiement);

router.post('./',PaiementController.createPaiement);

router.get('./:id',PaiementController.getPaiementByID);

// Pour PUT (remplacement complet) :
router.put('/:id', PaiementController.updatePaiement);

// Ou pour PATCH (mise à jour partielle) :
router.patch('/:id', PaiementController.updatePaiement);

router.delete('./:id',PaiementController.deletePaiement);




module.exports = router;