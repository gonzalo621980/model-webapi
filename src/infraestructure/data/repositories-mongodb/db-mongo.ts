import mongoose from 'mongoose';
import config from '../../../server/configuration/config';


const createConnection = async (usePool) => {
    const host = config.mongo.MONGO_HOST;
    const port = config.mongo.MONGO_PORT;
    const db = config.mongo.MONGO_DB;
    const usu = config.mongo.MONGO_USER;
    const psw = config.mongo.MONGO_PASSWORD;
    const max = parseInt(config.mongo.MONGO_MAX_CONNECTION);

    //const uri = `mongodb://${usu}:${psw}@${host}:${port}?authMechanism=DEFAULT`;
    const uri = `mongodb://${host}:${port}/${db}`;
    
    const mongodb = await mongoose.connect(uri, (usePool) ?
    {
        maxPoolSize: max,
        minPoolSize: 0,
        maxIdleTimeMS: 10000
    } :
    {
        
    });
    
    return mongodb;
}

export { createConnection };
