import { getDBConnection } from "../database/connections";

export const getItem = async (idInstanciaItem) => {
  // client.connect();
  
  const query = 
  `SELECT * FROM instancia_item
   WHERE id= ${Number(idInstanciaItem)};
  `; // Select query
  const result = await getDBConnection(query);
  return result;
  // client.end();
}

export const postDroparItemNoQuadrado = async (idInstanciaItem, idQuadrado) => {
  // client.connect();
  
  const query = 
  `CALL dropar_item_no_quadrado(${Number(idInstanciaItem)},  ${Number(idQuadrado)});
  `; // Select query
  const result = await getDBConnection(query);
  return result;
  // client.end();
}

export const usarItem = async (idInstanciaItem, player) => {
  let query = 
  `SELECT * FROM get_instancia_items_nomes_and_precos()
   WHERE id= ${Number(idInstanciaItem)};
  `;  
  // Select query
  const result = await getDBConnection(query);

  if (result && result.length) {
    if (result[0].tipo_especializacao === 'comida' || result[0].tipo_especializacao === 'adrenalina') {
      query = `
        DELETE FROM instancia_item
          WHERE id = ${idInstanciaItem};
      `
    } else {
      query = `
        UPDATE instancia_item
        SET bolsa = null,
        player = ${player}
        where id = ${idInstanciaItem};
      `
    }

    await getDBConnection(query);
  }
  return result;
}
