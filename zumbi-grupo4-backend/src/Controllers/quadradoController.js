import { 
  getQuadradoInfo as getQuadradoInfoService, 
  getLados as getZonaQuadradosService, 
  postPegaItem 
} from "../Services/QuadradosServicesDB";

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

  async postPegaItemQuadrado(req, res) {
    const { id_bolsa, id_instancia_item } = req.body;

    try {
      await postPegaItem(id_bolsa, id_instancia_item);
    }catch(error) {
      console.log(error.message);
    }

    return res.status(201).send('Post de pegar item do quadrado realizado com sucesso!');
  }
}

export default new QuadradoController();