import expess, { Request, Response } from 'express';
import indexRouter from './router/index.router';
import userRouter from './router/user.router';

const PORT: number = 7000;
const HOST: string = 'localhost';

//create Server with express function
const server = expess();
server.use('/index', indexRouter);
server.use('/user', userRouter);

server.listen(PORT, HOST, () => {
  console.info(`server Running on ${HOST}:${PORT} 😁👍`);
});
