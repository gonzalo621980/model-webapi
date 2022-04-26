import { createConnection } from '../db-mongo';
import UserSchema from './user-schema';

let mongoose = null;

const createUserModel = async () => {
    if (!mongoose) {
        mongoose = await createConnection(true);
    }
    return mongoose.model('UserModel', UserSchema);
}

export { createUserModel };
