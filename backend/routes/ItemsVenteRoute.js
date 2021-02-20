import express from 'express';
import { protect } from '../controllers/authController.js';

import {
    createItemsVente,
    getAllItemsVente,
    getOneItemsVente,
    deleteItmesVente,
    patchItemsVente,
} from '../controllers/ventItemsController.js';

const router = express.Router();

router
    .route('/')
    //@desc create itemsVente
    //@route POST /api/v1/product
    //@access Privé + access
    .post(createItemsVente,protect)
    //@desc  get all items
    //@route POST /api/v1/product
    //@access Pubic
    .get(getAllItemsVente,protect);


// router.route('/:id');

export default router;
