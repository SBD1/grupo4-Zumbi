import { getNpcInfo, comprarItem, venderItem, pegarMissao } from "../Services/NpcServicesDB";

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

  async comprarItem(req, res) {
    const { id_item, id_player, id_vendedor } = req.body;
    let response = null;

    try { 
      response = await comprarItem(id_item, id_player, id_vendedor);
    }catch(error) {
      console.log(error.message);
    }

    return res.status(200).json(response);
  }

  async venderItem(req, res) {
    const { id_item, id_player } = req.body;
    let response = null;

    try { 
      response = await venderItem(id_item, id_player);
    }catch(error) {
      console.log(error.message);
    }

    return res.status(200).json(response);
  }

  async pegarMissao(req, res) {
    const { id_npc, id_player } = req.body;
    let response = null;

    try { 
      response = await pegarMissao(id_npc, id_player);
    }catch(error) {
      console.log(error.message);
    }

    return res.status(200).json(response);
  }
}

export default new NpcController();