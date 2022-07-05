const express = require('express');
const userRoutes = require('./routes/userRoutes');
require('express-async-errors');

const app = express();
app.use(express.json());

app.use('/user', userRoutes);

app.use((err, _req, res, _next) => {
  const { name, message } = err;
  switch (name) {
    case 'ValidationError': res.status(400).json({ message }); break;
    case 'NotFoundError': res.status(404).json({ message }); break;
    default: console.warn(err); res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Rodando na porta 3000'));