require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('./middlewares/bodyParser');
const trainingsRouter = require('./routes/trainings');

const app = express();
const PORT = 3005;

app.use(cors());

app.use(bodyParser);

// Usar as rotas definidas no arquivo trainingsRouter.js
app.use('/api/treinamentos', trainingsRouter);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
