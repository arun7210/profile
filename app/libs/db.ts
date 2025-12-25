import mysql, { ConnectionConfig } from 'mysql2';

const dbConfig = {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
}

export default dbConfig;