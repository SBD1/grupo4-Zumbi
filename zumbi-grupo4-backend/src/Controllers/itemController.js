import {getItem} from "../Services/ItemServicesDB"

class ItemController {
  async getItem(req, res) {
    const { item_id } = req.params;
    let response = null;

    try { 
      response = await getItem(item_id);
    }catch(error) {
      console.log(error.message);
    }

    return res.status(200).json(response);
  }
}

export default new ItemController();