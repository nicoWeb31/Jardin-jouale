import express from 'express';
import { singnup,login } from '../controllers/authController.js';

const router = express.Router();


router.post('/singnup', singnup);
router.post('/login', login);





export default router;