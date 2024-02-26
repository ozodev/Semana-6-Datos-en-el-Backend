const express = require('express');
const app = express();
const port = 3000;
const authRoute = require('./auth');
const path = require('path');
const cors = require('cors');

// Middleware para servir archivos estáticos
const appName = 'taller_semana_6';
app.use(express.static(path.join(__dirname, '..', 'cliente', 'dist', appName)));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'cliente', 'dist', appName, 'index.html'));
});
app.use(express.json());
app.use(cors());

//Establecemos rutas
app.use('/api/v1',authRoute);
app.use(cors({
  origin: 'http://localhost:4200'
}));

//Iniciamos servidor express
app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});