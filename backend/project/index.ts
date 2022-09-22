import expess, { Request, Response } from 'express';

const PORT: number = 7000;
const HOST: string = 'localhost';

//create Server with express function
const server = expess();

server.get('/', (req: Request, res: Response) => {
  res.send('This is Home Page');
});

server.get('/about', (req: Request, res: Response) => {
  res.send('This is about Page');
});

server.get('/gallery', (req: Request, res: Response) => {
  res.send('This is gallery Page');
});

server.get('/contact', (req: Request, res: Response) => {
  res.send('This is contact Page');
});

server.get('/info', (req: Request, res: Response) => {
  res.send('This is info Page');
});

server.get('*', (req: Request, res: Response) => {
  res.send('Page Not Found');
});

server.listen(PORT, HOST, () => {
  console.info(`server Running on ${HOST}:${PORT} 😁👍`);
});
