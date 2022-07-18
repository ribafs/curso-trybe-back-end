'use strict';
module.exports = {
   /** 
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize').Sequelize} queryInterface
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('attendances', {
      petId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: 'pet_id',
        references: {
          model: 'pets',
          key: 'id',
        },
      },
      vetId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: 'vet_id',
        references: {
          model: 'vets',
          key: 'id',
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('attendances');
  }
};