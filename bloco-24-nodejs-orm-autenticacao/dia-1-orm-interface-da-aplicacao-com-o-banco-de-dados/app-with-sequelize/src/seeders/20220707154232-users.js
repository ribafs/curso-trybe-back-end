'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     queryInterface.bulkInsert('Users',
     [
       {
         fullName: 'Leonardo',
         email: 'leo@test.com',
         // usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
         createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
         updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
       },
       {
         fullName: 'JEduardo',
         email: 'edu@test.com',
         createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
         updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
       },
     ], {}); 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     queryInterface.bulkDelete('Users', null, {});
  }
};
