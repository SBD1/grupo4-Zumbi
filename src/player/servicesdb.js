// import { query } from "express";
import { getDBConnection } from "../database/connections";

export const getPlayerInfo = async (idPlayer) => {
  // client.connect();
  
  const query = 
  `SELECT * FROM PLAYER
   WHERE id = ${Number(idPlayer)};
  `; // Select query

  return await getDBConnection(query);
  // console.log('mensagem ai', client.end());
  // client.end();
}