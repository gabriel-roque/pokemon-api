const express = require('express');

const routes = express.Router();

const RootController = require('../../app/controllers/root.controller');
const PokemonController = require('../../app/controllers/pokemon.controller');
const BattleController = require('../../app/controllers/battle.controller');

routes.get('/', RootController.index);

routes.get('/pokemons', PokemonController.index);
routes.post('/pokemons', PokemonController.store);
routes.get('/pokemons/:id', PokemonController.show);
routes.put('/pokemons/:id', PokemonController.update);
routes.delete('/pokemons/:id', PokemonController.delete);

routes.post('/batalhar/:pokemonAId/:pokemonBId', BattleController.battle);

module.exports = routes;
