import { Request, Response, NextFunction } from 'express';

//GET
export async function allUser(req: Request, res: Response) {
  res.status(200).send('This is All User Page');
}
//GET
export async function singleUser(req: Request, res: Response) {
  res.status(200).send('This is Single User Page');
}
//POST
export async function createUser(req: Request, res: Response) {
  res.status(201).send('This is Create User Page');
}
//PUT
export async function updateAllUser(req: Request, res: Response) {
  res.status(202).send('This is Update All User Page');
}
//PATCH
export async function updateSingleUser(req: Request, res: Response) {
  res.status(202).send('This is Update Single User Page');
}
//DELETE
export async function deleteUser(req: Request, res: Response) {
  res.status(200).send('This is Delete User Page');
}
