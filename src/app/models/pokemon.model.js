require('dotenv').config();

const { Model, DataTypes } = require('sequelize');

class Pokemon extends Model {
  static init(sequelize) {
    super.init(
      {
        tipo: DataTypes.STRING,
        treinador: DataTypes.STRING,
        nivel: DataTypes.INTEGER,
      },
      {
        sequelize,
      },
    );
  }
}

module.exports = Pokemon.schema(process.env.DB_NAME_SCHEMA);
