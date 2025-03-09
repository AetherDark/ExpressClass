'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExamenU2API extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ExamenU2API.init({
    latitud: DataTypes.FLOAT,
    longitud: DataTypes.FLOAT,
    altitud: DataTypes.FLOAT,
    nombre: DataTypes.TEXT,
    direccion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ExamenU2API',
  });
  return ExamenU2API;
};