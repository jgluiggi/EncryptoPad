'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('organizations', [
      { name: 'Org1' },
      { name: 'Org2' },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('organizations', null, {});
  }
};
