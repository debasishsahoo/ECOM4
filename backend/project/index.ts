import expess, { Request, Response } from 'express';

const PORT: number = 7000;
const HOST: string = 'localhost';

//create Server with express function
const server = expess();

server.get('/', (req: Request, res: Response) => {
  res.status(200).send('This is Home Page');
});

server.get('/about', (req: Request, res: Response) => {
  res.status(200).send('This is about Page');
});

server.get('/gallery', (req: Request, res: Response) => {
  res.status(203).send('This is gallery Page');
});

server.get('/contact', (req: Request, res: Response) => {
  res.status(201).send('This is contact Page');
});

server.get('/info', (req: Request, res: Response) => {
  res.status(301).send('This is info Page');
});

server.get('*', (req: Request, res: Response) => {
  res.status(404).send('Page Not Found');
});




server.listen(PORT, HOST, () => {
  console.info(`server Running on ${HOST}:${PORT} 😁👍`);
});
