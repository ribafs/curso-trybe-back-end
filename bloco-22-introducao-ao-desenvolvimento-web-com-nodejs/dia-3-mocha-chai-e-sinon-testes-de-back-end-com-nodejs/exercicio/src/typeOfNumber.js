const typeOfNumber = (num) => {
  if (num === 0) return 'neutro';
  if (num > 0) return 'positivo';
  if (num < 0) return 'negativo';
  throw new Error('o valor deve ser um número');
};

module.exports = typeOfNumber;