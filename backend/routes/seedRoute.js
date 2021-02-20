import express from 'express';
import {
    getAllSeed,
    createSeed,
    patchSeed,
    deleteSeed,
    getOneSeed,
} from '../controllers/graineController.js';
import { protect } from '../controllers/authController.js';

const router = express.Router();

router
    .route('/')
    //@desc recuperer toutes la grainothéque
    //@route POST /api/v1/seed
    //@access Privé
    .get(getAllSeed, protect)
    //@desc cree entré grainothéque
    //@route POST /api/v1/seed
    //@access Privé
    .post(createSeed, protect);

router

    .route('/:id')
    //@desc modifier graine
    //@route Patch /api/v1/seed/:id
    //@access Privé + access
    .patch(patchSeed, protect)
    //@desc suppression graine
    //@route POST /api/v1/seed/:id
    //@access Privé + access
    .delete(deleteSeed, protect)
    //@desc cree entré grainothéque
    //@route GET /api/v1/seed/:id
    //@access Privé + access
    .get(getOneSeed, protect);

export default router;
