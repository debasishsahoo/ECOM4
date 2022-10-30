import express,{Request,Response}  from "express";
import * as Data from  '../data/persons.data';

export async function allUser(req:Request,res:Response){
    res.status(200).send(Data.persons)
}
export async function createUser(req:Request,res:Response){
    res.status(201).send('Create User')
}
export async function updateUserByID(req:Request,res:Response){
    res.status(202).send('Upadate User By ID')
}
export async function updateUserByRole(req:Request,res:Response){
    res.status(202).send('Upadate User By Role')
}
export async function singleUser(req:Request,res:Response){
    res.status(200).send('Single User')
}
export async function deleteUser(req:Request,res:Response){
    res.status(301).send('Delete User')
}