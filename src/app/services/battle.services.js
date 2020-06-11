const pokemonA = {
  id: 1,
  tipo: 'pikachu',
  treinador: 'Thiago',
  nivel: 3,
};

const pokemonB = {
  id: 1,
  tipo: 'charizad',
  treinador: 'Thiago',
  nivel: 1,
};

function serializedResponsePokemons(vencendor, perdedor) {
  return { vencendor, perdedor };
}

function generateRandomNumber(min, max) {
  return min + Math.floor((max - min + 1) * Math.random());
}

function regraDe3(maiorNivel, equivalenteMaiorNivel, menorNivel) {
  let multiplicao = menorNivel * equivalenteMaiorNivel;
  return multiplicao / maiorNivel;
}

function calcularChances(pokemonMaiorLvl, pokemonMenorLvl) {
  let diferencaNiveis = pokemonMaiorLvl.nivel - pokemonMenorLvl.nivel;
  const chancesPokemonMaiorLvl = regraDe3(pokemonMaiorLvl.nivel, 100, diferencaNiveis);
  const chancesPokemonMenorLvl = 100 - chancesPokemonMaiorLvl;

  return { chancesPokemonMaiorLvl, chancesPokemonMenorLvl };
}

function calcularProbabilidades(chancesMenorLvl) {
  const probabilidadeMaiorLvl = generateRandomNumber(0, 100);
  const probabilidadeMenorLvl = generateRandomNumber(0, chancesMenorLvl);

  return { probabilidadeMaiorLvl, probabilidadeMenorLvl };
}

function verificarGanhador(probabilidadeMaiorLvl, probabilidadeMenorLvl, pokemonA, pokemonB) {
  if (probabilidadeMaiorLvl > probabilidadeMenorLvl) {
    console.log('Pokemon de Maior Nivel ganhador');
    return serializedResponsePokemons(pokemonA, pokemonB);
  } else if (probabilidadeMaiorLvl === probabilidadeMenorLvl) {
    battlePokemons(pokemonA, pokemonB);
  } else {
    console.log('Pokemon de Menor Nivel ganhador');
    return serializedResponsePokemons(pokemonB, pokemonA);
  }
}

const battlePokemons = (pokemonA, pokemonB) => {
  if (pokemonA.nivel > pokemonB.nivel) {
    const { chancesPokemonMenorLvl } = calcularChances(pokemonA, pokemonB);
    const { probabilidadeMaiorLvl, probabilidadeMenorLvl } = calcularProbabilidades(chancesPokemonMenorLvl);
    return verificarGanhador(probabilidadeMaiorLvl, probabilidadeMenorLvl, pokemonA, pokemonB);
  }
  if (pokemonB.nivel > pokemonA.nivel) {
    const { chancesPokemonMenorLvl } = calcularChances(pokemonB, pokemonA);
    const { probabilidadeMaiorLvl, probabilidadeMenorLvl } = calcularProbabilidades(chancesPokemonMenorLvl);
    return verificarGanhador(probabilidadeMaiorLvl, probabilidadeMenorLvl, pokemonA, pokemonB);
  }
  if (pokemonA.nivel === pokemonB.nivel) {
    const ganhador = generateRandomNumber(1, 2);
    return ganhador === 1
      ? serializedResponsePokemons(pokemonA, pokemonB)
      : serializedResponsePokemons(pokemonB, pokemonA);
  }
};

console.log(battlePokemons(pokemonA, pokemonB));

module.exports = { battlePokemons };

/* 
  Nota do Desenvolvedor - Algoritmo de batalha de Pokemons

  Fator relevante: Nível do Pokemon.

  1. Passo: Verificar qual dos pokemons possui o nível maior
  2. Passo: Calcular as chances dos dois pokemons com base na dirença de seus níveis (Fazendo o uso de regra de três)
  3. Passo: Calcular as probabilidades com base nas chances dos pokemons
  4. Passo: Verificar resultado final com base nas probabilidades obtidas do pokemon

  Exemplo Prático

  Pokemon A possui nível 3
  Pokemon B possui nível 1

  1. Passo: 
    - A diferença entre pokemon A para B é de 2 níveis.
    - Nível do pokemon A é equivalente a 100%, queremos saber quanto são as chance do pokemon A com base
      no nível do pokemon B. Logo temos que calcular a regra de trẽs
  
  2. Passo:
      3 --- 100
      2 ---   X

      2 * 100 = 200 / 3 = 66.66%

      Chances de Pokemon A ganhar é de: 66.66%
      Se Pokemon A equivale ao 100% e tirou 66.66% 
      logo devemos calcular a chances de Pokemon B como:

      100 - 66.66 = 33.33%

    - Chances de Pokemon A: 66.66%
    - Chances de Pokemon B: 33.33%

  3. Passo: 
    - Precisamos das chances do menor Pokemon para calcular as probabilidades de A ou B ganhar.
    - Para calcular a probababilidade do Pokemon A precisamos gerar um valor aleatório entre 0-100
      Isto é, o mesmo possue o maior nivel, logo ele equivale ao 100 da amostra, 
      assim como efetuado na regra de três
    - Para calcular a probababilidade do Pokemon B precisamos gerar um valor aleatório entre 0-33
      Isto é, o mesmo possue menor nível, logo suas chances são de no máximo 33%

    - Caso as probabilidades dos dois pokemons venham ser iguais, deverá ser chamado o método battlePokemons
      para que seja possível calcular novamente as probabilidades até que as mesmas sejam diferentes uma da outro.
      Isto é, sera uma chamada recursiva até que não seja uma probabilidades igual
      
  4. Passo: 
      
      Ou seja, Pokemon A por ser o de maior nível, ele equivale ao 100% da amostra, isto é, ele tem mais chances
      de tirar uma probabilidade maior dado que seu nível impacta em sua chances.

      > Enquanto Pokemon B só poderá tirar uma probabilidade de 0 a 33.

      Em um dado exemplo podemos dizer que:
      
        > Pokemon A tira de 0 a 100 e pokemon B tira de 0 a 33

        > Se Pokemon A tirar a probabilidade entre 0 e 100 e pokemon B tirar entre 0 e 33 e 
        a probabilidade de A for maior que B, logo A é vencendor.

        > Se Pokemon A tirar a probabilidade entre 0 e 100 e pokemon B tirar entre 0 e 33 e 
        a probabilidade de B for maior que A, logo B é vencendor.

*/
