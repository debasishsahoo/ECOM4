import expess, { Request, Response } from 'express';
import * as IndexCtrl from '../controller/index.controller';
import * as ErrorHandler from '../Error/Error.Handler';

//createing Main Router Entry Point
const router = expess.Router();

router.get('/', IndexCtrl.Home);
router.get('/about', IndexCtrl.About);
router.get('/gallery', IndexCtrl.Gallery);
router.get('/contact', IndexCtrl.Contact);
router.get('/info', IndexCtrl.Info);
router.get('*', ErrorHandler.PageNotFound);

export default router;
