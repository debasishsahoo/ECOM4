import express, { Request, Response } from 'express'
import Connect from './db/connect';
import config from './config/default'
import userRoute from './router/user.router'
import { notFound } from './error/notfound.error';

const PORT: number = config.port;
const DBURL: string = config.dburl;


const app = express()

app.use(express.json())
app.use('/user', userRoute);
app.use(notFound);

const start = async () => {
    try {
        await Connect(DBURL);
        app.listen(PORT, () => {
            console.info(`Server Listen on http://localhost:${PORT}`)
        });
    }
    catch (e: unknown) {
        console.error(e)
    }

}

start();


//POST localhost:7000/user/