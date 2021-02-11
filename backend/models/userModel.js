import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

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
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    password: {
        type: String,
        require: [true, 'Please provide a password'],
        minlength: 8,
        select: false,
    },
    passwordChangeAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
});

userShema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);

    next();
});

//check password
userShema.methods.correctPassword = function (candiatePassword, userPassword) {
    const result = bcrypt.compare(candiatePassword, userPassword);
    return result;
};

//change password after ?
userShema.methods.changePasswordAfter = function (JWTTimstamp) {
    if (this.passwordChangeAt) {
        const changeTimestamp = parseInt(
            this.passwordChangeAt.getTime() / 1000,
            10
        );
        return JWTTimstamp < changeTimestamp;
    }

    return false;
};

//create token for reset password
userShema.methods.createPasswordResetToken = function () {
    const resetToken = crypto.randomBytes(32).toString('hex');

    this.passwordResetToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');
    console.log("🚀 ~ file: userModel.js ~ line 70 ~ this.passwordResetToken", this.passwordResetToken)

    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

    return resetToken;
};

const User = mongoose.model('User', userShema);

export default User;
