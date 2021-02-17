import express from 'express';
import {getAllSeed,createSeed,patchSeed,deleteSeed,getOneSeed } from '../controllers/graineController.js';
import { protect } from '../controllers/authController.js'


const router = express.Router();

router.route('/')
//@desc recuperer toutes la grainothéque
//@route POST /api/v1/seed
//@access Privé
.get(getAllSeed)
//@desc cree entré grainothéque
//@route POST /api/v1/seed
//@access Privé
.post(createSeed)


router.route('/:id')
.patch(patchSeed)
.delete(deleteSeed)
.get(getOneSeed)


export default router;