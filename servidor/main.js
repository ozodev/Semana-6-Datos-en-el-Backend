const express = require('express');
const app = express();
const port = 3000;
const authRoute = require('./auth');

//midware
app.use(express.json());

app.use('/api/v1',authRoute);

app.listen(port, () => {
  console.log(`Servidor Express escuchando en http://localhost:${port}`);
});