const express = require('express');

const routes = express.Router();

const RootController = require('../../app/controllers/root.controller');
const PokemonController = require('../../app/controllers/pokemon.controller');

routes.get('/', RootController.index);

routes.get('/pokemons', PokemonController.index);
routes.post('/pokemons', PokemonController.store);

module.exports = routes;
