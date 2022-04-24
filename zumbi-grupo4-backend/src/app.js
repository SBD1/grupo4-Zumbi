
import express from 'express';
import routes from './routes';
const cors = require('cors');

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors(corsOptions))
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;