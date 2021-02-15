import mongoose from 'mongoose';

const planingSchema = new mongoose.Schema({
    week:{
        type: Number,
        require: [true, "Legume obligatoire "]
    },
    todo: {
        type:[String]
    }
})


const Planning = mongoose.model('planing', planingSchema);

export default Planning;