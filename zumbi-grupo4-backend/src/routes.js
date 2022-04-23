import { Router } from 'express';
import PlayerController from './Controllers/playerController';
import QuadradoController from './Controllers/quadradoController';
import BolsaController from './Controllers/bolsaController';
import ItemController from './Controllers/itemController';
import ZumbiController from './Controllers/zumbiController';

const routes = new Router();

//rotas player
routes.get('/player/:player_id', PlayerController.getPlayerInfo);

//rotas quadrado
//busca as informações de itens, zumbi, npc e as moedas de um quadrado
routes.get('/quadrado/:quadrado_id', QuadradoController.getQuadradoInfo);

//busca os quadrados de uma zona
routes.get('/quadrado/zona/:zona_id', QuadradoController.getLados);

//post de item do quadrado
routes.post('/quadrado/pega-item', QuadradoController.postPegaItemQuadrado),

//post de todos items do quadrado
routes.post('/quadrado/pega-todos-itens', QuadradoController.postAllItens)

//rotas bolsa
//pega items de uma bolsa
routes.get('/bolsa/:bolsa_id', BolsaController.getItemsBolsa);

//rotas Item
//pega detalhes de uma instancia de item 
routes.get('/item/:item_id', ItemController.getItem);

//Dropa item no quadrado
routes.post('/item', ItemController.postDroparItemNoQuadrado);

//rotas Zumbi
//morte zumbi
routes.post('/zumbi', ZumbiController.postMorteZumbi);



export default routes;