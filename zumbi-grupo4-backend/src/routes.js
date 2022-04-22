import { Router } from 'express';
import PlayerController from './Controllers/playerController';
import QuadradoController from './Controllers/quadradoController';
import BolsaController from './Controllers/bolsaController';
import ItemController from './Controllers/itemController';

const routes = new Router();

//rotas player
routes.get('/player/:player_id', PlayerController.getPlayerInfo);

//rotas quadrado
//busca as informações de itens, zumbi, npc e as moedas de um quadrado
routes.get('/quadrado/:quadrado_id', QuadradoController.getQuadradoInfo);

//busca os quadrados de uma zona
routes.get('/quadrado/zona/:zona_id', QuadradoController.getLados);

//rotas bolsa
//pega items de uma bolsa
routes.get('/bolsa/:bolsa_id', BolsaController.getItemsBolsa);

//rotas Item
//pega detalhes de uma instancia de item 
routes.get('/item/:item_id', ItemController.getItem);


export default routes;