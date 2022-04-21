import { Router } from 'express';

import PlayerController from './Controllers/playerController';
import QuadradoController from './Controllers/quadradoController';

const routes = new Router();

//rotas player
routes.get('/player/:player_id', PlayerController.getPlayerInfo);


//rotas quadrado
//busca as informações de itens, zumbi, npc e as moedas de um quadrado
routes.get('/quadrado/:quadrado_id', QuadradoController.getQuadradoInfo);

//busca os quadrados de uma zona
routes.get('/quadrado/zona/:zona_id', QuadradoController.getLados);


export default routes;