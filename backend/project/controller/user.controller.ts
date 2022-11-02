import express, { Request, Response } from "express";
import persons from '../data/persons.data';

export async function allUser(req: Request, res: Response) {
    res.status(200).json(persons)
}
export async function createUser(req: Request, res: Response) {
    const newUser = req.body

    if (newUser.length <= 0) {
        return res.status(400).json({ success: false, msg: 'Please Provide Data' })
    }
    const responseData = [...persons, newUser]
    res.status(201).json({ success: true, msg: responseData })
}
export async function updateUserByID(req: Request, res: Response) {
    const { id } = req.params
    const updateData = req.body

    const oldUser = persons.find((person) => person.id === Number(id));
    if (!oldUser) {
        return res.status(400).json({ success: false, msg: `No User found with id ${id}` })
    }


    const updateUser = persons.map((person) => {
        if (person.id === Number(id)) {
            person.name = updateData.name
            person.age = updateData.age
            person.streem = updateData.streem
        }
        return person
    })


    res.status(202).send({ success: true, msg: updateUser })
}
export async function updateUserByStreem(req: Request, res: Response) {
    const { role } = req.params
    const updateData = req.body

    const oldUser = persons.find((person) => person.streem === role);
    if (!oldUser) {
        return res.status(400).json({ success: false, msg: `No User found with streem ${role}` })
    }


    const updateUser = persons.map((person) => {
        if (person.streem === role) {
            person.age = updateData.age
        }
        return person
    })


    res.status(202).send({ success: true, msg: updateUser })
}
export async function singleUser(req: Request, res: Response) {
    const { id } = req.params

    const oldUser = persons.find((person) => person.id === Number(id));
    if (!oldUser) {
        return res.status(400).json({ success: false, msg: `No User found with id ${id}` })
    }
    res.status(200).send({ success: true, msg: oldUser })
}
export async function deleteUser(req: Request, res: Response) {
    const { id } = req.params
    const oldUser = persons.find((person) => person.id === Number(id));
    if (!oldUser) {
        return res.status(400).json({ success: false, msg: `No User found with id ${id}` })
    }
    const updateUser = persons.filter((person) => person.id !== Number(id))
    res.status(301).send({ success: true, msg: updateUser })

}