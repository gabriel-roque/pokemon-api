const Sequelize = require('sequelize');
const dbconfig = require('../config/database/credentials');

const connection = new Sequelize(dbconfig);

const Pokemon = require('../app/models/pokemon.model');

Pokemon.init(connection);

module.exports = connection;
