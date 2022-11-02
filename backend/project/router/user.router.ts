import express, { Request, Response } from "express";
const router = express.Router();
import logger from "../log/custom.log";
import * as userCtrl from '../controller/user.controller'

router.get('/', logger, userCtrl.allUser);
router.post('/', logger, userCtrl.createUser);
router.patch('/:id', logger, userCtrl.updateUserByID);
router.put('/:role',logger, userCtrl.updateUserByStreem);
router.delete('/:id',logger, userCtrl.deleteUser);
router.get('/:id',logger, userCtrl.singleUser);

export default router;