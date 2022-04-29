import { getPlayerInfo } from "../Services/PlayerServicesDB";
import { postMortePlayer } from "../Services/PlayerServicesDB";
import { getItemsPlayer, getMissoes } from "../Services/PlayerServicesDB";

class PlayerController {
  async getPlayerInfo(req, res) {
    const { player_id } = req.params;
    let response = null;

    try { 
      response = await getPlayerInfo(player_id);
    }catch(error) {
      console.log(error.message);
    }

    return res.status(200).json(response);
  }
  async postMortePlayer(req, res) {
    const { player_id, zumbi_id} = req.body;
    let response = null;

    try { 
      response = await postMortePlayer(player_id, zumbi_id);
    }catch(error) {
      console.log(error.message);
    }

    return res.status(200).json(response);
  }
  async getItemsPlayer(req, res) {
    const { player_id } = req.params;
    let response = null;

    try { 
      response = await getItemsPlayer(player_id);
    }catch(error) {
      console.log(error.message);
    }

    return res.status(200).json(response);
  }
  async getMissoes(req, res) {
    const { player_id } = req.params;
    let response = null;

    try { 
      response = await getMissoes(player_id);
    }catch(error) {
      console.log(error.message);
    }

    return res.status(200).json(response);
  }
}

export default new PlayerController();