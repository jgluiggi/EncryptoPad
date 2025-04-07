'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('roles', [
      { name: 'default' },
      { name: 'admin' },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('roles', null, {});
  }
};
