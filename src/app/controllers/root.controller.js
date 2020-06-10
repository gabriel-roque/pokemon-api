const api = require('../../config/api/version');

class RootController {
  async index(request, response) {
    response.status(200).json({
      ...api.body,
      respositorie: 'https://github.com/gabriel-roque/pokemon-api',
      resources: {
        pokemon: {
          get: `${api.app_url}/pokemons`,
          post: `${api.app_url}/pokemons`,
          put: `${api.app_url}/pokemons{/:id}`,
          delete: `${api.app_url}/pokemons{/:id}`,
        },
        battle: {
          post: `${api.app_url}/batalhar{/:pokemonAId}{/:pokemonBId}`,
        },
      },
    });
  }
}

module.exports = RootController;
