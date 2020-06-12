const Pokemon = require('../models/pokemon.model');
const { checkPokemons, factoryPokemon } = require('../../helpers/pokemon');

async function validateRequest(body) {
  const { tipo, treinador } = body;

  if (!checkPokemons(tipo)) {
    return { status: 403, response: 'Invalid Pokemon. Try again' };
  }

  const pokemon = await Pokemon.create(factoryPokemon(tipo, treinador));
  return { status: 200, response: pokemon };
}

async function findPokemon(id) {
  try {
    const pokemon = await Pokemon.findByPk(id);
    if (pokemon === null) throw notFound;
    return pokemon;
  } catch (e) {
    throw notFound;
  }
}

async function upgradeLevelPokemon(id) {
  const pokemon = await findPokemon(id);
  return await pokemon.update({ nivel: pokemon.nivel + 1 });
}

async function downgradeLevelPokemon(id) {
  const pokemon = await findPokemon(id);
  if (pokemon.nivel === 1) {
    await destroyPokemon(id);
  }
  return await pokemon.update({ nivel: pokemon.nivel - 1 });
}

async function destroyPokemon(id) {
  const pokemon = await findPokemon(id);
  await pokemon.destroy();
}

module.exports = { validateRequest, findPokemon, upgradeLevelPokemon, downgradeLevelPokemon };
