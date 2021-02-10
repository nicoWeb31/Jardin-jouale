import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';

const userShema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Please tell us your name'],
    },
    email: {
        type: String,
        require: [true, 'Please tell us your email'],
        unique: true,
        loadClass: true,
        validate: [validator.isEmail, 'Please provide a valide email'],
    },
    photo: String,
    password: {
        type: String,
        require: [true, 'Please provide a password'],
        minlength: 8,
    },
});

userShema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);

    next();
});

const User = mongoose.model('User', userShema);

export default User;
