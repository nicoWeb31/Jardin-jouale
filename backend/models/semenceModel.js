import mongoose from 'mongoose';

const semenceSchema = new mongoose.Schema({
    legume:{
        type: String,
        require: [true, "Legume obligatoire "]
    },
    cultivar: {
        type:String,
        require: [true, "cultivar obligatoire"],
        unique:[ true, 'le cultivar existe deja !']
    },
    startSemis:{
        type:Date
    },
    endSemis:{
        type:Date
    },
    quantity:{
        type:Number,
        require:[true,'quantités obligatoire']
    },
    comment:{
        type:String,
    }
})


const Semence = mongoose.model('Semence', semenceSchema);

export default Semence;
