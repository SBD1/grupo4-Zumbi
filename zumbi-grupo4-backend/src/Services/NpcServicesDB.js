// import { query } from "express";
import { getDBConnection } from "../database/connections";

export const getNpcInfo = async (idNpc) => {

  let id_npc_query = `
    SELECT n.id from instancia_npc inp
      LEFT JOIN npc n on inp.id_npc = n.id
    where inp.id = ${idNpc}
  `

  let query = 
  `SELECT * FROM get_estoque_vendendor(${Number(idNpc)});`; // Select query
  const estoque = await getDBConnection(query);

  query = 
  `SELECT * FROM falas WHERE id_npc in (${id_npc_query});`; // Select query
  const falas = await getDBConnection(query);

  query = 
  `SELECT * FROM missao WHERE npc in (${id_npc_query});`; // Select query
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
  try {
  let id_npc_query = `
    SELECT n.id from instancia_npc inp
      LEFT JOIN npc n on inp.id_npc = n.id
    where inp.id = ${id_npc}
  `
  console.log(id_npc_query)

  const response = await getDBConnection(id_npc_query);
  let query = 
  `
      CALL pegar_missao(${response[0].id}, ${id_player});
  `;
  console.log(query)
    await getDBConnection(query);
  } catch (error) {
    message = error.message
  }

  return {
    message
  };
}

