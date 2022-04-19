import { Router } from 'express';

import PlayerController from './player/playerController';

const routes = new Router();
routes.get('/player/:player_id', PlayerController.getPlayerInfo);

export default routes;