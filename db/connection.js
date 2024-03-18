const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'usuario',
    password: 'senha',
    database: 'contatosBD'
});


module.exports = pool.promise();