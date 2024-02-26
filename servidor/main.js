const express = require('express');
const app = express();
const port = 3000;
const authRoute = require('./auth');

//Ajustes de lectura de los bodys
app.use(express.json());

//Establecemos rutas
app.use('/api/v1',authRoute);

//Iniciamos servidor express
app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});