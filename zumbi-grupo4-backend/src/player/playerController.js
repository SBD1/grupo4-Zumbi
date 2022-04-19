import { getPlayerInfo } from "./servicesdb";

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
}

export default new PlayerController();