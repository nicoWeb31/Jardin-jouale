import express from 'express';
import { singnup } from '../controllers/authController.js';

const router = express.Router();


router.post('/singnup', singnup);




export default router;