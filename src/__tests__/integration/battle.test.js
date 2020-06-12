const { api } = require('../../config/services/api.services');

describe('groups integration tests end-points resource [pokemon]', () => {
  let pokemonA = { tipo: 'pikachu', treinador: 'Gabriel' };
  let pokemonB = { tipo: 'charizard', treinador: 'Anderson' };

  it('should return pokemon {A} created [POST]', async () => {
    await api.post('/pokemons', pokemonA).then((resp) => {
      expect(resp.status).toEqual(200);
      pokemonA = resp.data;
    });
  });

  it('should return pokemon {B} created [POST]', async () => {
    await api.post('/pokemons', pokemonB).then((resp) => {
      expect(resp.status).toEqual(200);
      pokemonB = resp.data;
    });
  });

  it('should return result of battle between pokemons [POST]', async () => {
    await api.post(`/batalhar/${pokemonA.id}/${pokemonB.id}`).then((resp) => {
      let resultBattle = resp.data;

      expect(resp.status).toEqual(200);

      expect(resultBattle).toHaveProperty(['vencedor', 'id']);
      expect(resultBattle).toHaveProperty(['vencedor', 'tipo']);
      expect(resultBattle).toHaveProperty(['vencedor', 'treinador']);
      expect(resultBattle).toHaveProperty(['vencedor', 'nivel']);

      expect(resultBattle).toHaveProperty(['perdedor', 'id']);
      expect(resultBattle).toHaveProperty(['perdedor', 'tipo']);
      expect(resultBattle).toHaveProperty(['perdedor', 'treinador']);
      expect(resultBattle).toHaveProperty(['perdedor', 'nivel']);
    });
  });
});
