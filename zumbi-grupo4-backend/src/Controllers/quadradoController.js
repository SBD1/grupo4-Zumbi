import { 
  getQuadradoInfo as getQuadradoInfoService, 
  getLados as getZonaQuadradosService, 
  postPegaItem,
  postPegaTodosItens,
  postDinheiroQuadrado
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

  async postDinheiroQuadrado(req, res) {
    const { id_player, id_quadrado } = req.body;

    try {
      await postDinheiroQuadrado(id_player, id_quadrado);
    }catch(error) {
      console.log(error.message);
    }

    return res.status(201).send('Dinheiro retirado do quadrado com sucesso!');
  }

  async postAllItens(req, res) {
    const { id_quadrado, id_bolsa } = req.body;

    try {
      await postPegaTodosItens(id_quadrado, id_bolsa);
    }catch(error) {
      console.log(error.message);
    }

    return res.status(201).send('Post de pegar todos os itens e dinheiro realizado com sucesso!');
  }
}

export default new QuadradoController();