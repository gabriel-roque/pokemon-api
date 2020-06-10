const express = require('express');

const routes = express.Router();

const RootController = require('../../app/controllers/root.controller');
const PokemonController = require('../../app/controllers/pokemon.controller');

routes.get('/', RootController.index);

routes.get('/pokemons', PokemonController.index);
routes.get('/pokemons/:id', PokemonController.show);
routes.post('/pokemons', PokemonController.store);
routes.put('/pokemons/:id', PokemonController.update);
routes.delete('/pokemons/:id', PokemonController.delete);

module.exports = routes;
