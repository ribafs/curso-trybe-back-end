'use strict';

const bcrypt = require('bcrypt');

module.exports = {
   /** 
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} queryInterface
   */

  async up (queryInterface, Sequelize) {
    const passwordHash = await bcrypt.hash('123456', 10);
    await queryInterface.bulkInsert('users', [{
      email: 'sheila@gmail.com',
      password_Hash: passwordHash,
      name: 'Sheila',
      phone: '(99) 9 9999 9999',
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
