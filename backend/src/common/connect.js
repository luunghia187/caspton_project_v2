var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'capstone_db'
});

connection.connect(function (err, connection) {
    if(err) console.log("ket noi that bai");
});

module.exports = connection;