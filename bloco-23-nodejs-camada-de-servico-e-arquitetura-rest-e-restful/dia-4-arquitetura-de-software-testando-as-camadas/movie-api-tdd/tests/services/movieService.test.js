const sinon = require('sinon');
const { exepect, expect } = require('chai');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', () => {
    const payloadMovies = {};
    
    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovies);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovies);

      expect(response).to.be.equal(false);
    });
  });

  describe('quando é inserido com sucesso', () => {
    const payloadMovies = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = 1;
      sinon.stub(MoviesModel, 'create').resolves({ id: ID_EXAMPLE });
    });

    after(() => {
      MoviesModel.create.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovies);

      expect(response).to.be.a('object');
    });
    
    it('tal objeto possui o "id" do novo filme inserido', async () =>{
      const response = await MoviesService.create(payloadMovies);

      expect(response).to.have.a.property('id');
    });
  });
});