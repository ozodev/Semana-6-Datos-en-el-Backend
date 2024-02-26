const express = require('express');
const db = require('./db');
const bcrypt = require('bcrypt');
const router = express.Router();

/**
 * Endpoint encargado de validar autenticacion de usuarios
 */
router.post('/login', async (req, res) => {
    let email = req.body.user;
    let password = req.body.password;
    try {
        // Realiza la consulta a la base de datos para encontrar el usuario por email
        db.get('SELECT password FROM users WHERE email = ?', [email], async (err, row) => {
            if (err) {// Si hay un error con la consulta de la base de datos, enviamos un 400
                res.status(400).send('Error al conectar con la base de datos');
                return;
            }
            if(!row){ // Si no se encontró el usuario, enviamos un 401
                res.status(401).send('Usuario o contraseña incorrecta');
                return;
            }
            let match = await bcrypt.compare(password, row.password);
            if (!match) {
                // Si la contraseña no coincide, envimos status un 401
                res.status(401).send('Usuario o contraseña incorrecta');
                return;
            }
            // Si la contraseña es correcta, enviamos status un 200
            res.status(200).send('Autenticación exitosa');
        });
    } catch (error) {
        // Cualquier otro error enviamos un 400
        res.status(400).send('Error al procesar la solicitud');
    }
});

/**
 * Endpoint encargado de registrar usuarios
 */
router.post('/register', async (req, res) => {
    let email = req.body.user;
    let password = req.body.password;
    try {
        let hash = await bcrypt.hash(password, 10);
        db.run('INSERT INTO users (email, password) VALUES (?, ?)', [email, hash], function (err) {
            if (err) {// Si hay un error con la inserción respondemos status 400
                res.status(400).send('No se pudo registrar al usuario');
                return;
            }
            // Si la inserción fue exitosa, enviamos status 200
            res.status(200).send('Usuario registrado con éxito');
        });
    } catch (error) {
        // Cualquier otro error enviamos status 400
        res.status(400).send('Error al procesar la solicitud de registro');
    }
});

module.exports = router;