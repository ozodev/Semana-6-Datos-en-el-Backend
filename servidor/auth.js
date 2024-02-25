const express = require('express');
const router = express.Router();
const db = require('./db');
const bcrypt = require('bcrypt');
const util = require('util');
const saltRounds = 10;
const compareAsync = util.promisify(bcrypt.compare);

router.post('/auth', async (req, res) => {
    let user = req.body.user;
    let password = req.body.password;
    try {
        const [results] = await db.query(`SELECT u.password FROM users u WHERE u.correo='${user}'`);
        if(results.length === 0){
            throw new Error(`Usuario ${user} no existe`);
        }
        let dbPassword = results[0].password;
        let resultado = await compareAsync(password,dbPassword);
        if (!resultado) {
            throw new Error(`Contraseña o usuario incorrecto`);
        }
    } catch (error) {
        res.status(401).send(error.message);
        return;
    }
    res.status(200).send();
});

module.exports = router;