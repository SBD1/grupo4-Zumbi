// import { query } from "express";
import { getDBConnection } from "../database/connections";

export const getPlayerInfo = async (idPlayer) => {
  // client.connect();
  
  const query = 
  `SELECT p.*, b.id as bolsa FROM player p LEFT JOIN bolsa b ON b.player = p.id 
   WHERE p.id = ${Number(idPlayer)};
  `; // Select query
  const result = await getDBConnection(query);
  return result;
  // client.end();
}

export const postMortePlayer = async (idPlayer, idZumbi) => {
  // client.connect();
  
  const query = 
  `INSERT INTO morte (player, zumbi, vitorioso) VALUES (${Number(idPlayer)}, ${Number(idZumbi)}, 'zumbi');
  `; // Select query
  const result = await getDBConnection(query);
  return result;
  // client.end();
}

export const getItemsPlayer = async (idPlayer) => {
  // client.connect();
  
  const query = 
  `SELECT * FROM get_instancia_items_nomes_and_precos()
   WHERE player = ${Number(idPlayer)};
  `; // Select query
  const result = await getDBConnection(query);
  console.log(result);
  return result;
  // client.end();
}