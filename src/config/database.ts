import { Sequelize } from 'sequelize'
import * as dotenv from 'dotenv'

dotenv.config();

const sequelize = new Sequelize({
    dialect: process.env.DB_DIALECT as "postgres",
    host: process.env.DB_HOST ,
    port: Number(process.env.DB_PORT) ,
    username: process.env.DB_USER ,
    password: process.env.DB_PASS ,
    database: process.env.DB_NAME,
    logging: false,
});

export default sequelize;
