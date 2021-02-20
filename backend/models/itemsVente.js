import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const ItemsVenteSchema = new Schema({
    name :{
        type: String,
        required: [true, 'nom obligatoire, merci'],

    },
    sousName: {
        type: String,
        required: [true, 'nom obligatoire, merci']
    },
    category: {
        type: String,
        enum: ['none','legume','plant' ],
        default: 'none',
    },
    quantity:{
        type: Number,
        required: [true,'quantité obligatoire !!'],

    },
    description: {
        type: String,
    },
    photo: {
        type: String,
    }


})


const ItemsVente = new mongoose.model('ItemsVente',ItemsVenteSchema)

export default ItemsVente;