import { getDBConnection } from "../database/connections";

export const getItemsBolsa = async (idBolsa) => {
  // client.connect();
  
  const query = 
  `SELECT * FROM get_instancia_items_nomes_and_precos()
   WHERE id= ${Number(idBolsa)};
  `; // Select query
  const result = await getDBConnection(query);
  return result;
  // client.end();
}