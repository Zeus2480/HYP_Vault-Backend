"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserCredential extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserCredential.belongsTo(models.User, { foreignKey: "userId" });

      // UserCredential belongs to Credential
      UserCredential.belongsTo(models.Credential, {
        foreignKey: "credentialId",
      });
    }
  }
  UserCredential.init(
    {
      userId: DataTypes.INTEGER,
      credentialId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UserCredential",
    }
  );
  return UserCredential;
};
