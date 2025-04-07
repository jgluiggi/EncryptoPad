'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_organizations', {
      user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      organization_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'organizations',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('user_organizations');
  }
};
