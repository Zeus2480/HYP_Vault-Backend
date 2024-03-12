'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Credential extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Credential.hasMany(models.UserCredential, { foreignKey: 'credentialId' });
    }
  }
  Credential.init({
    website: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    additionalInfo: DataTypes.TEXT,
    createdBy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Credential',
  });
  return Credential;
};