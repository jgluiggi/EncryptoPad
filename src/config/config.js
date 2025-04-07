require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || null,
    database: process.env.DB_NAME || 'nome_do_banco',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'postgres'
  },
};
