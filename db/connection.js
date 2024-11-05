const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Fatec@1234',
    database: 'contatosBD'
});


module.exports = pool.promise();