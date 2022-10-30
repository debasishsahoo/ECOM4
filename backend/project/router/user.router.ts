import express,{Request,Response}  from "express";
const router=express.Router();
import * as userCtrl from '../controller/user.controller'

router.get('/',userCtrl.allUser);
router.post('/',userCtrl.createUser);
router.patch('/:id',userCtrl.updateUserByID);
router.put('/:role',userCtrl.updateUserByRole);
router.delete('/:id',userCtrl.deleteUser);
router.get('/:id',userCtrl.singleUser);

export default router;