import { Request, Response, NextFunction } from 'express';

export async function Home(req: Request, res: Response) {
  res.status(200).send('This is Home Page');
}
export async function About(req: Request, res: Response) {
  res.status(202).send('This is About Page');
}
export async function Gallery(req: Request, res: Response) {
  res.status(200).send('This is Gallery Page');
}
export async function Info(req: Request, res: Response) {
  res.status(200).send('This is Info Page');
}
export async function Contact(req: Request, res: Response) {
  res.status(200).send('This is Contact Page');
}
