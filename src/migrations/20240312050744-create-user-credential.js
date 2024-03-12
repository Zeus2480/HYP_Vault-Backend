"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("UserCredentials", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users", // This is a reference to another model
          key: "id", // This is the column name of the referenced model
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE", // This option can be changed based on your needs
      },
      credentialId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Credentials", // This is a reference to another model
          key: "id", // This is the column name of the referenced model
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE", // This option can be changed based on your needs
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("UserCredentials");
  },
};
