const { checkPokemons, factoryPokemon } = require('../../helpers/pokemon');

describe('groups units tests for pokemon helpers', () => {
  it('should received false is case pokemon out of list valid', () => {
    let pokemon = 'rayquaza';
    expect(checkPokemons(pokemon)).toBeFalsy();
  });

  it('should received true is case pokemon in list valid', () => {
    let pokemon = 'pikachu';
    expect(checkPokemons(pokemon)).toBeTruthy();

    pokemon = 'Pikachu';
    expect(checkPokemons(pokemon)).toBeTruthy();

    pokemon = '      PikAcHu       ';
    expect(checkPokemons(pokemon)).toBeTruthy();

    pokemon = 'MewTwo     ';
    expect(checkPokemons(pokemon)).toBeTruthy();
  });

  it('should return an pokemon factory', () => {
    let pokemon = factoryPokemon('pikachu', 'Gabriel');

    let pokemonExpectMath = {
      tipo: 'pikachu',
      treinador: 'Gabriel',
      nivel: 1,
    };

    expect(pokemon).toMatchObject(pokemonExpectMath);
  });
});
