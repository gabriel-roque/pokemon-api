const { checkPokemons } = require('../../helpers/pokemon');

describe('groups units tests for pokemon helpers', () => {
  it('should received false is case pokemon out of list valid', () => {
    let pokemon = 'rayquaza';
    expect(checkPokemons(pokemon)).toBeFalsy();
  });

  it('should received true is case pokemon in list valid', () => {
    let pokemon = 'pikachu';
    expect(checkPokemons(pokemon)).toBeTruthy();
  });
});
