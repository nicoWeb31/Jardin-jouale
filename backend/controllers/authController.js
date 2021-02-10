import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import { catchAsync } from '../utils/catchAsync.js';
import AppError from '../utils/appError.js'

export const singnup = catchAsync(async (req, res, next) => {
    
    // const newUser = await User.create(req.body);
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SERCRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });

    res.status(201).json({
        status: 'success',
        token,
        data: {
            user: newUser,
        },
    });
});


export const login = (req, res,next) => {

    const { email, password } = req.body;

    //check if email and password exist
    if(!email || !password) {
    next(new AppError('Please provide email and password',400));
    }

    const token = '';
    res.status(200).json({
        status: 'success',
        token,
    });

}
