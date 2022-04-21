import { getQuadradoInfo as getQuadradoInfoService, getLados as getZonaQuadradosService } from "../Services/QuadradosServicesDB";

class QuadradoController {
  async getQuadradoInfo (req, res) {
    const { quadrado_id } = req.params;
    let response = null;

    try { 
      response = await getQuadradoInfoService(quadrado_id);
    }catch(error) {
      console.log(error.message);
    }

    return res.status(200).json(response);
  }

  async getLados (req, res) {
    const { zona_id } = req.params;
    let response = null;
  
    try {
      response = await getZonaQuadradosService(zona_id);
    }catch(error) {
      console.log(error.message);
    }

    return res.status(200).json(response);
  }
}

export default new QuadradoController();