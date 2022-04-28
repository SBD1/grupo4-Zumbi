import { getDBConnection } from "../database/connections";

export const getItemsBolsa = async (idBolsa) => {
  const query = 
  `SELECT * FROM get_instancia_items_nomes_and_precos()
   WHERE bolsa = ${Number(idBolsa)};
  `; // Select query
  const result = await getDBConnection(query);
  return result;
}