import express from 'express';
import {getAllSeed} from '../controllers/graineController.js';
import { protect } from '../controllers/authController.js'


const router = express.Router();

router.route('/')
//@desc recuperer toutes la grainothéque
//@route POST /api/v1/seed
//@access Privé
.get(getAllSeed)




export default router;