'use strict';

module.exports = {
  /** 
  * @param {import('sequelize').QueryInterface} queryInterface
  * @param {import('sequelize').Sequelize} queryInterface
  */

  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pets', [
      {
        user_id: 1,
        name: 'Davi',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 1,
        name: 'Nety',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 2,
        name: 'Panqueka',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: 3,
        name: 'Naerobi',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {

  }
};
