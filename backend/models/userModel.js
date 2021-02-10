import mongoose from 'mongoose';
import validator from 'validator';

const userShema = new mongoose.Schema({
    name: {
        type:String,
        require: [true, 'Please tell us your name']
    },
    email: {
        type:String,
        require: [true, 'Please tell us your email'],
        unique: true,
        loadClass:true,
        validate: [validator.isEmail, 'Please provide a valide email']
    },
    photo:String,
    password:{
        type:String,
        require: [true, 'Please provide a password'],
        minlength: 8
    },
    

})


const User = mongoose.model('User',userShema)

export default User;