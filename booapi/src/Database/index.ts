import { Dialect, Sequelize } from 'sequelize'
import config from  './config.json';
import dotenv from "dotenv";

dotenv.config();

const dbName = process.env.MYSQL_DATABASE as string || config.database.database
const dbUser = process.env.MYSQL_USER as string || config.database.username
const dbHost = process.env.MYSQL_HOST || config.database.host
const dbDriver = process.env.DB_DRIVER as Dialect || config.database.dialect as Dialect
const dbPassword = process.env.MYSQL_PASSWORD || config.database.password
const dbPort = parseInt(process.env.MYSQL_PORT) || config.database.port

const options = process.env.MODE as string === 'development' ?
    {
        host: dbHost,
        port: dbPort,
        dialect: dbDriver
    }
    :
    {
        host: dbHost,
        dialect: dbDriver
    };

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, options);

export default sequelizeConnection