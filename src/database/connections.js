const { Pool } = require("pg");
require('dotenv/config');

async function getDBConnection(query, returToCaller=true) {
  //Conectar Banco de Dados
  const DB_USER = process.env.DB_USER
  const DB_PASS = process.env.DB_PASS
  const DB_HOST = process.env.DB_HOST
  const DB_NAME = process.env.DB_NAME
  const DB_PORT = 5432
  const connectionString = `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
  const connection = new Pool({ connectionString: connectionString, });


  connection.connect();
  const resp = await connection.query(query);
  connection.end();
  if(returToCaller) {
    return resp.rows[0];
  }
  return;
};

module.exports = {
  getDBConnection
}