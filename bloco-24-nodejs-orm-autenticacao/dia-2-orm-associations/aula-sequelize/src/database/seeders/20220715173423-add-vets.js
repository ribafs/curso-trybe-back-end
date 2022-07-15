'use strict';

module.exports = {
   /** 
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} queryInterface
   */

  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('vets', [
      {
        name: 'Michel Scott',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Jim Halpert',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Pam Beesly',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Dwight Schrute',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Andy Bernard',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
  }
};
