const express = require('express');
const app = express();
const port = 3000;
const authRoute = require('./auth');
const path = require('path');


// Middleware para servir archivos estáticos
const appName = 'taller_semana_6';s
app.use(express.static(path.join(__dirname, '..', 'cliente', 'dist', appName)));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'cliente', 'dist', appName, 'index.html'));
});
app.use(express.json());

//Establecemos rutas
app.use('/api/v1',authRoute);

//Iniciamos servidor express
app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});