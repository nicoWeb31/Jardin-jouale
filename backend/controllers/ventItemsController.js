import ItemsVente from "../models/itemsVente.js";


import {
    getAll,
    createNewDoc,
    updateOne,
    deleteOne,
    getOne
} from './handlerFactory.js';

export const getAllItemsVente = getAll(ItemsVente);

export const createItemsVente = createNewDoc(ItemsVente);

export const patchItemsVente = updateOne(ItemsVente);

export const deleteItmesVente = deleteOne(ItemsVente);

export const getOneItemsVente = getOne(ItemsVente);