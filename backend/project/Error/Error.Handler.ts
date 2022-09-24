import { Request, Response, NextFunction } from 'express';

export async function PageNotFound(req: Request, res: Response) {
  res.status(404).send('Sorry ... Nothing Found');
}
