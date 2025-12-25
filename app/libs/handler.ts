import mysql from 'mysql2/promise';
import dbConfig from "./db";



export async function getRequest({ query }: any) {

    const connection = await mysql.createConnection(dbConfig);

    try {
        connection.connect()
        const [results, fields] = await connection.query(query);
        return results;

    }catch (error) {
        console.error(error);
    }finally{
        connection.end();
    }
}

export async function getQueryRequest({ query, value }: any) {

    const connection = await mysql.createConnection(dbConfig);

    try {
        connection.connect()
        const [results, fields] = await connection.query(query, [value]);
        return results;

    }catch (error) {
        console.error(error);
    }finally{
        connection.end();
    }
}

export async function postRequest({ query }: any){

    const connection = await mysql.createConnection(dbConfig);

    try {
        connection.connect()
        const [results, fields] = await connection.query(query);
        return JSON.stringify(results);

    }catch (error) {
        console.error(error);
    }finally{
        connection.end();
    }
}