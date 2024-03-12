// Example file: seeders/20210304123456-create-super-admin-user.js

"use strict";

const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    const SALT_ROUNDS = process.env.SALT_ROUNDS || 10;
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash("asd@123", salt);
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "superadmin", // Replace with your desired username
          passwordHash: hashedPassword,
          role: "super_admin", // Make sure this matches the role identifier in your middleware
          pin: "1234", // Replace with your desired PIN; ensure this is also securely stored
          email: "faizan@hyperzod.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    // If needed, here you can clear the seeded super admin
    await queryInterface.bulkDelete("Users", { username: "superadmin" }, {});
  },
};
