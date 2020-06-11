const { findPokemon } = require('../services/pokemon.services');
const { battlePokemons } = require('../services/battle.services');

module.exports = {
  async battle(request, response) {
    // buscar os dois e enviar para o serviço de batalha
    // depois decrementar perdedor e incremetar ganhador nível
    // caso seja nivel 0 o próximo deverá ser excluido a função
    const { pokemonAId, pokemonBId } = request.params;

    try {
      const pokemonA = await findPokemon(pokemonAId);
      const pokemonB = await findPokemon(pokemonBId);
      const resultBattle = battlePokemons(pokemonA, pokemonB);

      return response.status(200).json(resultBattle);
    } catch (e) {
      return response.status(404).json({ message: 'Pokemon not found' });
    }
  },
};
