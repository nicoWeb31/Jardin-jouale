import Semence from '../models/semenceModel.js';
import {
    getAll,
    createNewDoc,
    updateOne,
    deleteOne,
    getOne
} from './handlerFactory.js';

export const getAllSeed = getAll(Semence);

export const createSeed = createNewDoc(Semence);

export const patchSeed = updateOne(Semence);

export const deleteSeed = deleteOne(Semence);

export const getOneSeed = getOne(Semence);
