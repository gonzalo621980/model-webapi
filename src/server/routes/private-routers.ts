import express from 'express';
import container from '../../infraestructure/ioc/dependency-injection';
import useAuth from '../middlewares/useAuth';


const privateRouter = express.Router();
const userController = container.resolve('userController');

privateRouter
  .get('/api/user', useAuth, userController.get)
  .get('/api/user/:id', useAuth, userController.getById)
  .post('/api/user', useAuth, userController.post)
  .put('/api/user/:id', useAuth, userController.put)
  .delete('/api/user/:id', useAuth, userController.delete);

export default privateRouter;
