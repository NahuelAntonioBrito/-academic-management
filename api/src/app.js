import express from 'express';
import userRouter from './routers/users.router.js'
import mongoose from 'mongoose';

export const PORT = 8080;

const app = express();
app.use(express.json());

app.use('/users', userRouter);

try{
    await mongoose.connect('mongodb+srv://nahuelantoniobritogutierrez:colegio@cluster0.r1vbi1q.mongodb.net/', {
        dbName: 'academicManagement'
    })

    app.listen(PORT, () => console.log('Server Up'));

} catch(error){
    console.log(error.message)
}