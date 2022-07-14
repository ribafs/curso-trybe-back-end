const express = require('express');
require('express-async-errors');
const errorHandler = require('./middlewares/errorHandler');
const usersRoute = require('./routes/usersRoute');

const app = express();

app.use(express.json());

app.use('/users', usersRoute);

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));
