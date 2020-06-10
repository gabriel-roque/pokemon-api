const Pokemon = require('../models/pokemon.model');
const { validateRequest } = require('../services/pokemon.services');

module.exports = {
  async index(request, response) {
    const pokemons = await Pokemon.findAll();

    return response.status(200).json(pokemons);
  },

  async store(request, response) {
    const result = await validateRequest(request.body);

    return response.status(result.status).json(result.response);
  },
};
