const mysql = require('mysql2');  // importe de la bibliotheque mysql2

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'GestionHotel'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connecté à la base de données MySQL');
});

module.exports = connection;