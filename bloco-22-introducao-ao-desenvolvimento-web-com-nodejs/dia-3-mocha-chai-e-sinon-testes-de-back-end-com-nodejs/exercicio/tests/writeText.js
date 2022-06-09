const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const writeText = require('../src/writeText');

const FILE_CONTENT = 'Olá Mundo!';

describe('Testa a função:', () => {
  describe('Se o arquivo existe:', () => {
    beforeEach(() => {
      sinon.stub(fs, 'writeFileSync').returns('ok');
    });

    afterEach(() => {
      fs.writeFileSync.restore();
    });

    it('Retorna uma string:', () => {
      const write = writeText('arquivo.txt', FILE_CONTENT);
      expect(write).to.be.a('string');
    });

    it('Retorna a palavra "ok"', () => {
      const write = writeText('arquivo.txt', FILE_CONTENT);
      expect(write).to.be.equals('ok');
    });
  });
});