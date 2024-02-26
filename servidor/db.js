const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

// Creamos carpeta de base de datos
const dbDir = path.join(__dirname, 'database');
if (!fs.existsSync(dbDir)) fs.mkdirSync(dbDir, { recursive: true });

// Creamos o cargamos y conectamos a la base de datos sqlite
const dbPath = path.join(dbDir, 'basededatos.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.error(err.message);
    console.log('Conectado a la base de datos SQLite.');
});

// Leer el archivo user.sql y ejecutarlo
const sqlPath = path.join(dbDir, 'user.sql');
fs.readFile(sqlPath, 'utf8', (err, data) => {
    if (err) {
        console.error(err.message);
        return;
    }
    db.exec(data, (err) => {
        if (err) {
            console.error(err.message);
        }
    });
});

// Exportamos la conexion a base de datos
module.exports = db;