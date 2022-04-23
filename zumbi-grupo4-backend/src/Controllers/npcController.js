import { getNpcInfo } from "../Services/NpcServicesDB";

class NpcController {
  async getNpcInfo(req, res) {
    const { npc_id } = req.params;
    let response = null;

    try { 
      response = await getNpcInfo(npc_id);
    }catch(error) {
      console.log(error.message);
    }

    return res.status(200).json(response);
  }
}

export default new NpcController();