// import { query } from "express";
import { getDBConnection } from "../database/connections";

export const getNpcInfo = async (idNpc) => {  
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
}

export const comprarItem = async (id_item, id_player, id_vendedor) => {
  let message = 'item comprado com sucesso!';
  let query = 
  `
    BEGIN;
      CALL comprar_item(${id_item}, ${id_player}, ${id_vendedor});
    COMMIT;
  `;

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
}

export const venderItem = async (id_item, id_player) => {
  let message = 'item vendido com sucesso!';
  let query = 
  `
    BEGIN;
      CALL vender_item(${id_item}, ${id_player});
    COMMIT;
  `;

  try {
    await getDBConnection(query);
  } catch (error) {
    query = 'ROLLBACK;'
    await getDBConnection(query);
    message = 'Ocorreu um erro ao tentar vender item'
  }

  return {
    message
  };
}

export const pegarMissao = async (id_npc, id_player) => {
  let message = 'nova missão na sua lista de missões';
  let query = 
  `
      CALL pegar_missao(${id_npc}, ${id_player});
  `;

  try {
    await getDBConnection(query);
  } catch (error) {
    message = 'Ocorreu um erro ao tentar iniciar missão'
  }

  return {
    message
  };
}

