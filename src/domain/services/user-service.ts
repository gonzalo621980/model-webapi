import IUserRepository from '../repositories/user-repository';


export default class UserService {

    userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async list() {
        return this.userRepository.list();
    }

    async findById(id) {
        return this.userRepository.findById(id);
    }

    async add(row) {
        return this.userRepository.add(row);
    }

    async modify(id, row) {
        return this.userRepository.modify(id, row);
    }

    async remove(id) {
        return this.userRepository.remove(id);
    }
    
}
