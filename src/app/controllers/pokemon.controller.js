const Pokemon = require('../models/pokemon.model');

module.exports = {
  async index(request, response) {
    const pokemons = await Pokemon.findAll();

    return response.status(200).json(pokemons);
  },

  async store(request, response) {
    const { tipo, treinador } = request.body;

    const pokemon = await Pokemon.create({ tipo, treinador, nivel: 1 });

    return response.status(200).json(pokemon);
  },
};
