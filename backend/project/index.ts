import express,{Request,Response} from 'express'
import userRoute from './router/user.router'
import { notFound } from './error/notfound.error';

const PORT:number=7000;

const app=express()
app.use('/user',userRoute);
app.use(notFound);

const start= async ()=>{
    try{
        app.listen(PORT,()=>{
            console.info(`Server Listen on http://localhost:${PORT}`)
        });
    }
    catch(e:unknown){
        console.error(e)
    }

}

start();