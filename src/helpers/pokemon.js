const validPokemons = ['charizard', 'mewtwo', 'pikachu'];

function checkPokemons(receivedPokemon) {
  pokemons = validPokemons.filter((pokemon) => receivedPokemon === pokemon);

  return pokemons.length === 1 ? true : false;
}

module.exports = { checkPokemons };
