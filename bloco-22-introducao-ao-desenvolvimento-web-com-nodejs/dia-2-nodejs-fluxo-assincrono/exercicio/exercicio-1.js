const fs = require('fs').promises;

const tresParametros = (num1, num2, num3) => {
  const promise = new Promise((resolve, reject) => {
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) reject(new Error('Informe apenas números'));
    const resultado = (num1 + num2) * num3;
    if (resultado < 50) reject(new Error('Valor muito baixo'));
    if (resultado > 50) resolve(resultado);
  });

  return promise;
};

tresParametros(10, 2, 5)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(error => console.log(`erro: ${error.message}`));
