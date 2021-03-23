import { app } from './app';
import mongose from 'mongoose';

const start = async () => {
    if (!process.env.JWT_KEY) {
        throw new Error('JTW_KEY must be defined');
    }

    try {
        await mongose.connect('mongodb://auth-mongo-srv:27017/auth', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Connected to MongoDb');
    } catch (err) {
        console.error(err);
    }

    app.listen(3000, () => {
        console.log('Listening on port 3000');
    });
};

start();