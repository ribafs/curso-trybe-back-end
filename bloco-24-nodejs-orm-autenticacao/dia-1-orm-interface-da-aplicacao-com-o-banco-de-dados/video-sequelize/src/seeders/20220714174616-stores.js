'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert('Stores', [
      {
        name: 'Magazine',
        description: 'Loja que tem eletros.',
      },
      {
        name: 'Tem de tudo',
        description: 'Pode vir que aqui tem de tudo.',
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Stores', null, {});
  }
};
