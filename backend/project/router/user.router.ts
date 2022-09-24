import expess, { Request, Response } from 'express';
import * as UserCtrl from '../controller/user.controller';
import * as ErrorHandler from '../Error/Error.Handler';

//createing Main Router Entry Point
const router = expess.Router();

router.get('/', UserCtrl.allUser);
router.get('/:id', UserCtrl.singleUser);
router.post('/', UserCtrl.createUser);
router.put('/:id', UserCtrl.updateAllUser);
router.patch('/:id', UserCtrl.updateSingleUser);
router.delete('/:id', UserCtrl.deleteUser);
router.all('*', ErrorHandler.PageNotFound);

export default router;
