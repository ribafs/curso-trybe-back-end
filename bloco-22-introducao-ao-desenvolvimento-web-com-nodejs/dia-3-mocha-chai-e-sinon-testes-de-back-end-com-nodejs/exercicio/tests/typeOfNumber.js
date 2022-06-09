const { expect } = require('chai');

const typeOfNumber = require('../src/typeOfNumber');

const POSITIVE = 'positivo';
const NEGATIVE = 'negativo';
const NEUTRAL = 'neutro';

describe('Testa a função:', () => {
  describe('Se ela receber um número:', () => {
    it('Ela deve retornar uma string', () => {
      const answer = typeOfNumber(2);
      expect(answer).to.be.a('string');
    });
    it('Se o número for maior que 0(zero), deve retornar "positivo"', () => {
      const answer = typeOfNumber(3);
      expect(answer).to.be.equals(POSITIVE);
    });
    it('Se o número for menor que 0(zero), deve retornar "negativo"', () => {
      const answer = typeOfNumber(-2);
      expect(answer).to.be.equals(NEGATIVE);
    });
    it('Se o número for igual a 0(zero), deve retornar "neutro"', () => {
      const answer = typeOfNumber(0);
      expect(answer).to.be.equals(NEUTRAL);
    });
  });
  describe('Se ela receber um NaN:', () => {
    it('Retorna a mensagem "o valor deve ser um número"', () => {
      expect(() => typeOfNumber('NaN')).to.be.throw();
    });
  });
});