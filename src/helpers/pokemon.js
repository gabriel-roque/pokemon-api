const validPokemons = ['charizard', 'mewtwo', 'pikachu'];

function checkPokemons(receivedPokemon) {
  receivedPokemon = String(receivedPokemon).toLocaleLowerCase().trim();

  let pokemons = validPokemons.filter((pokemon) => receivedPokemon === pokemon);

  return pokemons.length === 1 ? true : false;
}

function factoryPokemon(pokemon, trainer) {
  return {
    tipo: String(pokemon).toLocaleLowerCase().trim(),
    treinador: trainer,
    nivel: 1,
  };
}

module.exports = { checkPokemons, factoryPokemon };
