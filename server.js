const express = require('express');   // On importe le framework Express
const cors = require('cors');        // on importe le middleware CORS pour que back-end accepte les requette de front-end
const bodyParser = require('body-parser');   // pour lire les données JSON dans le corps des requetes POST/PUT

const clientRoutes = require('./routes/clients');
const chambreRoutes = require('./routes/chambres');
const reservationRoutes = require('./routes/reservation');
const paiementRoutes = require('./routes/paiement');
const employeRoutes = require('./routes/employe');
const factureRoutes = require('./routes/facture');
const restaurantRoutes = require('./routes/restaurant');
const menuRoutes = require('./routes/menu');
const reservationRestaurantRoutes = require('./routes/reservationRestaurant');
const serviceRoutes = require('./routes/service');
const reservationServiceRoutes = require('./routes/reservationService');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/clients', clientRoutes);
app.use('/api/chambres',chambreRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/paiements',paiementRoutes);
app.use('/api/employe',employeRoutes);
app.use('/api/facture',factureRoutes);
app.use('/api/menu',menuRoutes);
app.use('/api/restaurant',restaurantRoutes);
app.use('/api/reservationRestaurant',reservationRestaurantRoutes);
app.use('/api/service',serviceRoutes);
app.use('/api/reservationService',reservationServiceRoutes);


app.listen(port, () => {
    console.log('serveur en écoute sur http://localhost:3000');
});
