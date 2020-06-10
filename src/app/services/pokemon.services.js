const Pokemon = require('../models/pokemon.model');
const { checkPokemons } = require('../../helpers/pokemon');

async function validateRequest(body) {
  const { tipo, treinador } = body;

  if (!checkPokemons(tipo)) {
    return { status: 403, response: 'Invalid Pokemon. Try again' };
  }

  const pokemon = await Pokemon.create({ tipo, treinador, nivel: 1 });
  return { status: 200, response: pokemon };
}

module.exports = { validateRequest };
