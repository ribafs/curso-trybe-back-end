const fs = require('fs').promises;

const tresParametros = (num1, num2, num3) => {
  const promise = new Promise((resolve, reject) => {
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) reject(new Error('Informe apenas números'));
    const resultado = (num1 + num2) * num3;
    if (resultado < 500) reject(new Error('Valor muito baixo'));
    if (resultado > 500) resolve(resultado);
  });

  return promise;
};

const num1 = Math.floor(Math.random() * 100 + 1);
const num2 = Math.floor(Math.random() * 100 + 1);
const num3 = Math.floor(Math.random() * 100 + 1);

const main = async () => {
  try {
    const result = await tresParametros(num1, num2, num3);
    console.log(result);
  } catch (error) {
    console.error(`Erro: ${error.message}`);
  }
};

main();
