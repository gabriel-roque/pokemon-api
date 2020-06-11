'use strict';

require('dotenv').config();

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Pokemons',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        tipo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        treinador: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        nivel: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        schema: process.env.DB_NAME_SCHEMA,
      },
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(`${process.env.DB_NAME_SCHEMA}.Pokemons`);
  },
};
