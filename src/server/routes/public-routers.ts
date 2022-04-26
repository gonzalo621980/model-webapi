import express from 'express';
import container from '../../infraestructure/ioc/dependency-injection';


const publicRouter = express.Router();
const loginController = container.resolve('loginController');

publicRouter
  .post('/api/login', loginController.post);

export default publicRouter;
