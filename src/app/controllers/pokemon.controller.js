const Pokemon = require('../models/pokemon.model');
const { validateRequest } = require('../services/pokemon.services');

module.exports = {
  async index(request, response) {
    const pokemons = await Pokemon.findAll({
      order: [['id', 'ASC']],
    });

    return response.status(200).json(pokemons);
  },

  async show(request, response) {
    const { id } = request.params;

    try {
      const pokemon = await Pokemon.findByPk(id);
      if (pokemon === null) throw notFound;
      return response.status(200).json(pokemon);
    } catch (e) {
      return response.status(404).json({ message: 'Pokemon not found' });
    }
  },

  async store(request, response) {
    try {
      const result = await validateRequest(request.body);

      return response.status(result.status).json(result.response);
    } catch (e) {
      return response.status(400).json({ message: 'Failed in create pokemon' });
    }
  },

  async update(request, response) {
    const { treinador } = request.body;

    try {
      const pokemon = await Pokemon.findByPk(request.params.id);
      await pokemon.update({ treinador });

      return response.status(204).json();
    } catch (e) {
      return response.status(404).json({ message: 'Pokemon not found' });
    }
  },

  async delete(request, response) {
    try {
      const pokemon = await Pokemon.findByPk(request.params.id);
      await pokemon.destroy();

      return response.status(204).json();
    } catch (e) {
      return response.status(404).json({ message: 'Pokemon not found' });
    }
  },
};
