import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
    id: Number,
    login: String,
    email: String,
    name: String,
    creationDate: Date,
    modificationDate: Date
}, {collection: 'User'});

export default UserSchema;
