const {
  battlePokemons,
  generateRandomNumber,
  serializedResponsePokemons,
} = require('../../app/services/battle.services');

describe('groups unit tests for operations battle algorithm', () => {
  it('should received an random number between interval parament', () => {
    let randomNumber = generateRandomNumber(1, 100);
    expect(typeof randomNumber).toBeTruthy();
  });

  it('should received an object formated of pokemon winner and loser', () => {
    let pokemonA = { id: 12, tipo: 'pikachu', treinador: 'Gabriel', nivel: 42 };
    let pokemonB = { id: 9, tipo: 'charizard', treinador: 'Thiago', nivel: 44 };

    let reponseSerialized = {
      vencedor: { ...pokemonA },
      perdedor: { ...pokemonB },
    };

    expect(serializedResponsePokemons(pokemonA, pokemonB)).toMatchObject(reponseSerialized);
  });

  it('check function root battle pokemon return pokemon winner and loser', () => {
    let pokemonA = { id: 12, tipo: 'pikachu', treinador: 'Gabriel', nivel: 42 };
    let pokemonB = { id: 9, tipo: 'charizard', treinador: 'Thiago', nivel: 44 };

    expect(battlePokemons(pokemonA, pokemonB)).toHaveProperty(['vencedor', 'id']);
    expect(battlePokemons(pokemonA, pokemonB)).toHaveProperty(['vencedor', 'tipo']);
    expect(battlePokemons(pokemonA, pokemonB)).toHaveProperty(['vencedor', 'treinador']);
    expect(battlePokemons(pokemonA, pokemonB)).toHaveProperty(['vencedor', 'nivel']);

    expect(battlePokemons(pokemonA, pokemonB)).toHaveProperty(['perdedor', 'id']);
    expect(battlePokemons(pokemonA, pokemonB)).toHaveProperty(['perdedor', 'tipo']);
    expect(battlePokemons(pokemonA, pokemonB)).toHaveProperty(['perdedor', 'treinador']);
    expect(battlePokemons(pokemonA, pokemonB)).toHaveProperty(['perdedor', 'nivel']);
  });
});
