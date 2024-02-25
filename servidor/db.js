const mysql = require('mysql2/promise');

//Configuracion Base de datos
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sydesystem'
};

const pool = mysql.createPool(dbConfig);

module.exports = pool;