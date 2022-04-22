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