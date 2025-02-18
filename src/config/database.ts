import { Dialect, Sequelize } from 'sequelize'
import * as dotenv from 'dotenv'

dotenv.config();

const sequelize = new Sequelize({
    dialect: (process.env.DB_DIALECT as Dialect) || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || 'user',
    password: process.env.DB_PASS || 'password',
    database: process.env.DB_NAME || 'database',
    logging: false,
});

export default sequelize;
