'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface) => {
    const hashedPassword = await bcrypt.hash('Senha12!', 10);

    await queryInterface.bulkInsert('users', [
      {
        email: 'user@example.com',
        username: 'user',
        password: hashedPassword,
        role_id: 1,
      },
      {
        email: 'admin@example.com',
        username: 'admin',
        password: hashedPassword,
        role_id: 2,
      },
      {
        email: 'user2@example.com',
        username: 'user2',
        password: hashedPassword,
        role_id: 1,
      },
      {
        email: 'user3@example.com',
        username: 'user3',
        password: hashedPassword,
        role_id: 1,
      }
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
