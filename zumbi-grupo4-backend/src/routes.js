import { Router } from 'express';

import PlayerController from './Controllers/playerController';

const routes = new Router();
routes.get('/player/:player_id', PlayerController.getPlayerInfo);

export default routes;