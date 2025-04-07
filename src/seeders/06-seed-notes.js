'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('notes', [
      {
        title: 'Bem-vindo ao sistema',
        content: 'Esta é a primeira nota de exemplo.',
        folder_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Nota pessoal',
        content: 'Meus objetivos de 2025.',
        folder_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('notes', null, {});
  }
};
