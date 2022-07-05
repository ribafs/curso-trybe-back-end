const express = require("express");
require("express-async-errors");

const app = express();
app.use(express.json());

app.use((err, _req, res, _next) => {
  const { name } = err;
  switch (name) {
    default:
      console.warn(err);
      res.sendStatus(500);
  }
});

app.listen(3000, () => console.log("Rodando na porta 3000"));
