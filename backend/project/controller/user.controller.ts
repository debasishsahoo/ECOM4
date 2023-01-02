import express, { Request, Response } from "express";
import { Insert, Update, View, ViewAll, Delete } from '../services/user.service'



export async function allUser(req: Request, res: Response) {
    const AllUser = await ViewAll();
    if (AllUser.length === 0) {
        return res.status(404).json({ success: false, msg: 'No Data Found' });
    }
    return res.status(200).json({ success: true, msg: `${AllUser.length} record found`, data: AllUser })
}


export async function createUser(req: Request, res: Response) {
    const inputRequest = req.body
    try {
        const user = await Insert(inputRequest);
        return res.status(201).json({ success: true, msg: 'Data Inserted', data: user })
    }
    catch (error: unknown) {
        return res.status(400).json({ success: false, msg: error })
    }
}


export async function updateUserByID(req: Request, res: Response) {
    const _id = req.params.id
    const updateRequest = req.body

    const user = await View({ _id })

    if (!user) {
        return res.status(401).json({ success: false, msg: `No User found with id ${_id}` })
    }

    const updateUser = await Update({ _id }, updateRequest, { new: true })

    res.status(202).json({ success: true, msg: `User found with id:${_id}`, data: updateUser })
}

// //view Single data
// export async function singleUser(req: Request, res: Response) {
//     const { id } = req.params

//     const oldUser = persons.find((person) => person.id === Number(id));
//     if (!oldUser) {
//         return res.status(400).json({ success: false, msg: `No User found with id ${id}` })
//     }
//     res.status(200).send({ success: true, msg: oldUser })
// }

// //delete data
// export async function deleteUser(req: Request, res: Response) {
//     const { id } = req.params
//     const oldUser = persons.find((person) => person.id === Number(id));
//     if (!oldUser) {
//         return res.status(400).json({ success: false, msg: `No User found with id ${id}` })
//     }
//     const updateUser = persons.filter((person) => person.id !== Number(id))
//     res.status(301).send({ success: true, msg: updateUser })

// }

// //search data
// export async function SearchUser(req: Request, res: Response) {
//     const { name, limit, streem } = req.query
//     let SortedUser = [...persons];

//     if (name) {
//         SortedUser = SortedUser.filter(user => {
//             return user.name.startsWith(String(name))
//         })
//     }

//     if (streem) {
//         SortedUser = SortedUser.filter(user => {
//             return user.streem.startsWith(String(streem))
//         })
//     }

//     const TotalResult: number = SortedUser.length;

//     if (limit) {
//         SortedUser = SortedUser.slice(0, Number(limit))
//     }


//     if (SortedUser.length === 0) {
//         return res.status(404).json({ success: false, msg: `No User found with Name: ${name}` })
//     }

//     const DisplayMsg: string = `1-${limit} over ${TotalResult} result found for "${name}"`

//     res.status(302).send({
//         success: true, msg: DisplayMsg, data: SortedUser
//     })
// }