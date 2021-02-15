import mongoose from 'mongoose';

const plantationSemis = new mongoose.Schema({
    legume:{
        type: String,
        require: [true, "Legume obligatoire "]
    },
    date: {
        type:Date
    },
    quantity: {
        type:Number,
        require: [true,'quantités obligatoire']
    },
    Jardin:{
        type: String,
        require: [true, "Jardin obligatoire "]
    },
    planche:{
        type: String,
        require: [true, "Planche obligatoire "]
    },
    outils:{
        type: String,
    },
    temps:{
        type: Number,
    },
    typeSemis:{
        type: String,
        enum:{
            values: ["semis", "repicage", "direct"],
            message: "Type de semis doit etre: semis, repicage ou direct !",
    
        }
    }
})


const PlantationSemis = mongoose.model('PlantationSemis', plantationSemis);

export default Planning;