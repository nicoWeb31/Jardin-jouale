import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import { catchAsync } from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';


const createToken = (user)=>{
    return jwt.sign({ id: user._id }, process.env.JWT_SERCRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
}


export const singnup = catchAsync(async (req, res, next) => {
    
    // const newUser = await User.create(req.body);
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    
    // const token = jwt.sign({ id: newUser._id }, process.env.JWT_SERCRET, {
    //     expiresIn: process.env.JWT_EXPIRE,
    // });

    const token = createToken(newUser);

    res.status(201).json({
        status: 'success',
        token,
        data: {
            user: newUser,
        },
    });
});


export const login = catchAsync(async(req, res,next) => {

    const { email, password } = req.body;

    //check if email and password exist
    if(!email || !password) {
    return next(new AppError('Please provide email and password',400));
    }

    const user = await User.findOne({ email: email}).select('+password');

    if(!user || !(await user.correctPassword(password,user.password))) {
        return next('Incorrect Email and Password',401)
    }


    const token = createToken(user)
    
            res.status(200).json({
                status: 'success',
                token,
            });

})
