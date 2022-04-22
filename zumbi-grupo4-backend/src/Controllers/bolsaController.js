import { getItemsBolsa } from "../Services/BolsaServicesDB";

class BolsaController {
  async getItemsBolsa(req, res) {
    const { bolsa_id } = req.params;
    let response = null;

    try { 
      response = await getItemsBolsa(bolsa_id);
    }catch(error) {
      console.log(error.message);
    }

    return res.status(200).json(response);
  }
}

export default new BolsaController();