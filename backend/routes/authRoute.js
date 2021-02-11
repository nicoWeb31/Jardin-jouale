import express from 'express';
import {
    singnup,
    login,
    protect,
    forgotPassword,
    resetPassword,
} from '../controllers/authController.js';

const router = express.Router();

//@desc create new account
//@route POST /api/v1/auth/singnup
//@access Public
router.post('/singnup', singnup);

//@desc create new order
//@route POST /api/v1/auth/login
//@access Public
router.post('/login', login);

//@desc frogot password 
//@route POST /api/V1/auth/forgotPassword -{email}
//@access Public
router.post('/forgotPassword', forgotPassword);

//@desc create new order
//@route Patch /api/v1/auth/resetPassword/:token -{password}
//@access Privé with mail
router.patch('/resetPassword/:token', resetPassword);

export default router;
