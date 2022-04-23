// import { query } from "express";
import { getDBConnection } from "../database/connections";

export const getNpcInfo = async (idNpc) => {
  // client.connect();
  
  let query = 
  `SELECT * FROM get_estoque_vendendor(${Number(idNpc)});`; // Select query
  const estoque = await getDBConnection(query);

  query = 
  `SELECT * FROM falas WHERE id_npc = ${Number(idNpc)};`; // Select query
  const falas = await getDBConnection(query);

  query = 
  `SELECT * FROM missao WHERE npc = ${Number(idNpc)};`; // Select query
  const missoes = await getDBConnection(query);

  return {
    estoque,
    falas,
    missoes
  };
  // client.end();
}

