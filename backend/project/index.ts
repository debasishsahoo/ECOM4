import expess, { Request, Response } from 'express';

const PORT: number = 7000;
const HOST: string = 'localhost';

const app = expess();

app.get('/', (req: Request, res: Response) => {
  res.send('This is Home Page');
});

app.get('/about', (req: Request, res: Response) => {
  res.send('This is about Page');
});

app.get('/gallery', (req: Request, res: Response) => {
  res.send('This is gallery Page');
});

app.get('/contact', (req: Request, res: Response) => {
  res.send('This is contact Page');
});

app.get('/info', (req: Request, res: Response) => {
  res.send('This is info Page');
});

app.listen(PORT, HOST, () => {
  console.info(`Application Running on ${HOST}:${PORT} 😁👍`);
});
