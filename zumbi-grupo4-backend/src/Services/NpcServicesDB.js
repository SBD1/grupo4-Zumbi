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

export const comprarItem = async (id_item, id_player, id_vendedor) => {
  // client.connect();
  let message = 'item comprado com sucesso!';
  let query = 
  `
    BEGIN;
      CALL comprar_item(${id_item}, ${id_player}, ${id_vendedor});
    COMMIT;
  `; // Select query

  try {
    await getDBConnection(query);
  } catch (error) {
    query = 'ROLLBACK;'
    await getDBConnection(query);
    message = 'Ocorreu um erro ao tentar comprar item'
  }

  return {
    message
  };
  // client.end();
}

