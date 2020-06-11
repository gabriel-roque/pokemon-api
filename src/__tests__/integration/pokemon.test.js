const { api } = require('../../config/services/api.services');

describe('groups integration tests end-points resource [pokemon]', () => {
  it('should return list of pokemons', async () => {
    await api.get('/pokemons').then((resp) => {
      expect(resp.status).toEqual(200);
      resp.data.map((pokemon) => {
        expect(pokemon).toHaveProperty('id');
        expect(pokemon).toHaveProperty('tipo');
        expect(pokemon).toHaveProperty('treinador');
        expect(pokemon).toHaveProperty('nivel');
      });
    });
  });

  it('should return pokemon created', async () => {
    let pokemon = {
      tipo: 'pikachu',
      treinador: 'Gabriel',
    };
    await api.post('/pokemons', pokemon).then((resp) => {
      expect(resp.status).toEqual(200);
    });
  });
});
