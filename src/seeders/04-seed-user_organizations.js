'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('user_organizations', [
      { user_id: 1, organization_id: 1 },
      { user_id: 3, organization_id: 2 },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('user_organizations', null, {});
  }
};
