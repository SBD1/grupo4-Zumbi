import { postMorteZumbi } from "../Services/ZumbiServicesDB"

class ZumbiController {
  async postMorteZumbi(req, res) {
    const { player_id, zumbi_id, idNovoQuadrado } = req.body;
    let response = null;

    try { 
      response = await postMorteZumbi(player_id, zumbi_id, idNovoQuadrado);
    }catch(error) {
      console.log(error.message);
    }

    return res.status(200).json(response);
  }
}

export default new ZumbiController();