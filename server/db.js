const mysql = require('mysql2');
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"h0212",
    database:"show_my_folio"
});

module.exports = connection;