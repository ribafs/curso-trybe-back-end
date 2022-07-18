const express = require('express');
require('express-async-errors');
const errorHandler = require('./middlewares/errorHandler');
const usersRoute = require('./routes/usersRoute');
const petsRoute = require('./routes/petsRoute');
const vetsRoute = require('./routes/vetsRoute');
const attendancesRoute = require('./routes/attendancesRoute');
const authRoute = require('./routes/authRoute');
const myRoute = require('./routes/myRoute');

const app = express();

app.use(express.json());

app.use('/auth', authRoute);
app.use('/attendances', attendancesRoute);
app.use('/my', myRoute);
app.use('/pets', petsRoute);
app.use('/users', usersRoute);
app.use('/vets', vetsRoute);

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));
