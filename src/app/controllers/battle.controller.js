const { findPokemon, upgradeLevelPokemon, downgradeLevelPokemon } = require('../services/pokemon.services');
const { battlePokemons } = require('../services/battle.services');

module.exports = {
  async battle(request, response) {
    const { pokemonAId, pokemonBId } = request.params;

    try {
      let pokemonA = await findPokemon(pokemonAId);
      let pokemonB = await findPokemon(pokemonBId);
      const resultBattle = battlePokemons(pokemonA, pokemonB);

      const vencedor = await upgradeLevelPokemon(resultBattle.vencendor.id);
      const perdedor = await downgradeLevelPokemon(resultBattle.perdedor.id);

      return response.status(200).json({ vencedor, perdedor });
    } catch (e) {
      return response.status(404).json({ message: 'Pokemon not found' });
    }
  },
};
