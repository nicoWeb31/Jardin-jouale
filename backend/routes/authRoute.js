import express from 'express';
import { singnup,login,protect,forgotPassword, resetPassword } from '../controllers/authController.js';

const router = express.Router();


router.post('/singnup', singnup);
router.post('/login',login);

router.post('/forgotPassword',forgotPassword);
router.post('/resetPassword',resetPassword);






export default router;