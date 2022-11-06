import express, { Request, Response } from "express";
const router = express.Router();
import logger from "../log/custom.log";
import * as userCtrl from '../controller/user.controller'

router.get('/', logger, userCtrl.allUser);//Data Fatch from DB and its READONLY->READ
router.post('/', logger, userCtrl.createUser);//Data send to DB and Save ->CREATE
router.patch('/:id', logger, userCtrl.updateUserByID);// data send to db for edit->UPDATE
router.put('/:role', logger, userCtrl.updateUserByStreem);// data send to db for edit
router.delete('/:id', logger, userCtrl.deleteUser);//data delete no fatch and send->DELETE
router.get('/:id', logger, userCtrl.singleUser);
router.get('/seacrh/query', logger, userCtrl.SearchUser)

export default router;