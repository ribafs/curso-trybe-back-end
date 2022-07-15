const express = require('express');
require('express-async-errors');
const errorHandler = require('./middlewares/errorHandler');
const usersRoute = require('./routes/usersRoute');
const petsRoute = require('./routes/petsRoute');
const vetsRoute = require('./routes/vetsRoute');
const attendancesRoute = require('./routes/attendancesRoute');

const app = express();

app.use(express.json());

app.use('/attendances', attendancesRoute);
app.use('/users', usersRoute);
app.use('/pets', petsRoute);
app.use('/vets', vetsRoute);

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));
