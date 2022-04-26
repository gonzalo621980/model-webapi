import { InjectionMode, createContainer, asClass } from 'awilix';

import UserController from '../../server/controllers/user-controller';
import LoginController from '../../server/controllers/login-controller';
import UserService from '../../domain/services/user-service';
import UserRepository from '../data/repositories-mongodb/user-repository';

const container = createContainer({
  injectionMode: InjectionMode.CLASSIC
})

container.register({
  userRepository: asClass(UserRepository),
  userService: asClass(UserService),
  userController: asClass(UserController),
  loginController: asClass(LoginController)
});

export default container;
