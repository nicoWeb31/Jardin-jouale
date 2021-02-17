import mongoose from 'mongoose';

const semenceSchema = new mongoose.Schema({
    legume:{
        type: String,
        required: [true, "Legume obligatoire "]
    },
    cultivar: {
        type:String,
        required: [true, "cultivar obligatoire"],
        unique:[ true, 'le cultivar existe deja !'],
        indexes:true
    },
    startSemis:{
        type:Date
    },
    endSemis:{
        type:Date
    },
    quantity:{
        type:Number,
        required:[true,'quantités obligatoire']
    },
    comment:{
        type:String,
    }
})


const Semence = mongoose.model('Semence', semenceSchema);

export default Semence;
