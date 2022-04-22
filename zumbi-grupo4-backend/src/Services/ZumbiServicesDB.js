import { getDBConnection } from "../database/connections";

export const postMorteZumbi = async (idPlayer, idZumbi, idNovoQuadrado) => {
  // client.connect();
  
  const query = 
  `CALL matar_zumbi(${Number(idZumbi)}, ${Number(idPlayer)}, ${Number(idNovoQuadrado)});
  `; // Select query
  const result = await getDBConnection(query);
  return result;
  // client.end();
}