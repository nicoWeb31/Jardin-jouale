import mongoose from 'mongoose';

const semenceSchema = new mongoose.Schema({
    legume:{
        type: String,
        require: [true, "Legume obligatoire "]
    },
    Cultivar: {
        type:String
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
