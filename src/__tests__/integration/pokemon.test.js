const { api } = require('../../config/services/api.services');

describe('groups integration tests end-points resource [pokemon]', () => {
  let pokemonTest = {};

  it('should return list of pokemons [GET]', async () => {
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

  it('should return pokemon created [POST]', async () => {
    let pokemon = { tipo: 'pikachu', treinador: 'Gabriel' };

    await api.post('/pokemons', pokemon).then((resp) => {
      expect(resp.status).toEqual(200);
      pokemonTest = resp.data;
    });
  });

  it('should return specific pokemon [SHOW]', async () => {
    await api.get(`/pokemons/${pokemonTest.id}`).then((resp) => {
      expect(resp.status).toEqual(200);
      let pokemon = resp.data;

      expect(pokemon).toHaveProperty('id');
      expect(pokemon).toHaveProperty('tipo');
      expect(pokemon).toHaveProperty('treinador');
      expect(pokemon).toHaveProperty('nivel');

      expect(pokemon.id).toEqual(pokemonTest.id);
      expect(pokemon.tipo).toEqual(pokemonTest.tipo);
      expect(pokemon.treinador).toEqual(pokemonTest.treinador);
      expect(pokemon.nivel).toEqual(pokemonTest.nivel);
    });
  });

  it('should updated specifc pokemon [PUT]', async () => {
    let pokemonUpdate = { treinador: 'Ash' };

    await api.put(`/pokemons/${pokemonTest.id}`, pokemonUpdate).then((resp) => {
      expect(resp.status).toEqual(204);
    });
  });

  it('should delete specifc pokemon [DELETE]', async () => {
    await api.delete(`/pokemons/${pokemonTest.id}`).then((resp) => {
      expect(resp.status).toEqual(204);
    });
  });
});
