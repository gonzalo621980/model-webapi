import IUserRepository from '../../../domain/repositories/user-repository';
import { createUserModel } from './model/user-model';
import User from '../../../domain/entities/user';


export default class UserRepository implements IUserRepository {

    constructor() {

    }

    async list() {
        return new Promise( async (resolve, reject) => {
            try {
                const UserModel = await createUserModel();
                const data = await UserModel.find();
                const result = data.map((row) => new User(row.id, row.login, row.email, row.name));
                resolve(result);
            }
            catch(error) {
                reject(error);
            }
        });
    }

    async findById(id:Number) {
        return new Promise( async (resolve, reject) => {
            try {
                const UserModel = await createUserModel();
                const data = await UserModel.findOne({id: id});
                const result = new User(data.id, data.login, data.email, data.name);
                resolve(result);
            }
            catch(error) {
                reject(error);
            }
        });
    }

    async add(row:User) {
        return new Promise( async (resolve, reject) => {
            try {
                const UserModel = await createUserModel();
                const insert = { id: Date.now(), login: row.login, name: row.name, email: row.email, creationDate : Date.now(), modificationDate: Date.now() };
                const data = await UserModel.create(insert);
                const result = new User(data.id, data.login, data.email, data.name);
                resolve(result);
            }
            catch(error) {
                reject(error);
            }
        });
    }

    async modify(id:Number, row:User) {
        return new Promise( async (resolve, reject) => {
            try {
                const UserModel = await createUserModel();
                const update = { login: row.login, name: row.name, email: row.email, modificationDate: Date.now() };
                const data = await UserModel.findOneAndUpdate({ id: id }, update);
                const result = new User(data.id, data.login, data.email, data.name);
                resolve(result);
            }
            catch(error) {
                reject(error);
            }
        });
    }

    async remove(id:Number) {
        return new Promise( async (resolve, reject) => {
            try {
                const UserModel = await createUserModel();
                await UserModel.deleteOne({ id: id });
                resolve(id);
            }
            catch(error) {
                reject(error);
            }
        });
    }

}
