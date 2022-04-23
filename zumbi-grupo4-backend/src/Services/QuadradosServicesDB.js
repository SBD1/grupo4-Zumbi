import { getDBConnection } from "../database/connections";

export const getLados = async (idZona) => {
  console.log('zona', idZona);
  const query = `
    SELECT id, lado_norte, lado_sul, lado_leste, lado_oeste FROM quadrado
    WHERE zona = ${Number(idZona)}
  `

  return await getDBConnection(query);
}

export const getQuadradoInfo = async (idQuadrado) => {
  let resp = {}

  const queries = {
    zumbi:  `
      SELECT 
        iz.id AS instancia_zumbi_id,
        iz.vida_atual,
        iz.dinheiro,
        z.tipoespecializacao
      FROM quadrado q
      JOIN instancia_zumbi iz ON iz.quadrado = ${Number(idQuadrado)}
      JOIN zumbi z ON z.id = iz.id_zumbi;
    `,

    moedas: `SELECT moedas as qtd FROM quadrado WHERE id = ${Number(idQuadrado)};` ,
    itens: ` SELECT * FROM get_instancia_items_nomes_and_precos() AS i WHERE i.quadrado = ${Number(idQuadrado)};`,
    npcs: 
    `
      SELECT 
            inpc.id AS instancia_npc_id,
            n.tipo_especializacao
      FROM quadrado q
      JOIN instancia_npc inpc ON inpc.quadrado = ${Number(idQuadrado)}
      JOIN npc n ON n.id = inpc.id_npc;
    `
  }

  for (let i of Object.keys(queries)) {
    resp[i] = await getDBConnection(queries[i]);
  }

  return resp;

}

export const postPegaItem = async (idBolsa, idInstanciaItem) => {
  const query = `CALL pegar_item_do_quadrado(${idBolsa}, ${idInstanciaItem})`
  try{
    await getDBConnection(query, false);
    return true;
  }catch(error){
    console.error(error.message)
    throw new Error(error.message);
  }
}

export const postPegaTodosItens = async (idInstanciaItem, idPlayer, idBolsa, idQuadrado) => {
  const queries = {
    1:`
      BEGIN;

      UPDATE PLAYER AS P SET DINHEIRO = P.DINHEIRO + Q.MOEDAS

      FROM (SELECT MOEDAS FROM QUADRADO WHERE ID = ${idQuadrado}) Q WHERE ID = ${idPlayer};

      UPDATE QUADRADO SET MOEDAS = 0 WHERE ID = ${idQuadrado};

      COMMIT;`,
  2:`
      UPDATE instancia_item SET bolsa = ${idBolsa}, quadrado = NULL, player = ${idPlayer} WHERE id = ${idInstanciaItem};
  `}

  try {
    for(let i of Object.keys(queries)){
      await getDBConnection(queries[i], false);
    }
    return true;
  }catch(error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}
