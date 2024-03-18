const express = require('express');
const bodyParser = require('body-parser');
const contatoRoutes = require('./routes/contatoRoutes');
const initDB = require('./db/initDB');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Inicializa o banco de dados e cria as tabelas, se necessário
initDB();

app.use('/contatos', contatoRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
