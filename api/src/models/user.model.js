import mongoose from 'mongoose';

const userCollection = 'users';
const userSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    birthday: { type: String },
    age: { type: Number },
    password: { type: String },
    role: { type: String, enum: ['SUPERUSUARIO', 'ADMINISTRATIVO', 'APODERADO', 'ALUMNO', 'EXALUMNO', 'PROFESOR'], default: 'ALUMNO' },
    documents: [{
        name: { type: String },
        reference: { type: String }
    }],
    last_connection: { type: Date },
    profileImage: { type: String } 
},{
    discriminatorKey: 'role',  // Campo para discriminar entre los tipos de usuario
});

mongoose.set('strictQuery', false);
const userModel = mongoose.model(userCollection, userSchema);

export default userModel;