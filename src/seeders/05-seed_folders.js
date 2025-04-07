'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('folders', [
      { name: 'Projetos', user_id: 1 },
      { name: 'Pessoais', user_id: 3 },
      { name: 'Trabalho', user_id: 3, organization_id: 2 },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('folders', null, {});
  }
};
