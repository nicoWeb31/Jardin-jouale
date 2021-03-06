import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import { catchAsync } from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';
import { promisify } from 'util';
import sendEmail from './mailer.js';
import crypto from 'crypto';

const createToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.JWT_SERCRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

//_______________________signup___________________________________________________________
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

//__________________________login_________________________________________________
export const login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    //check if email and password exist
    if (!email || !password) {
        return next(new AppError('Please provide email and password', 400));
    }

    const user = await User.findOne({ email: email }).select('+password');

    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError('Incorrect Email and Password', 401));
    }

    const token = createToken(user);
    //TODO: REMOVE USER PASSWORD

    res.status(200).json({
        status: 'success',
        user,
        token,
    });
});

//____________________________protect route______________________________________________
export const protect = catchAsync(async (req, res, next) => {
    let token;

    //1 get token and check
    if (
        req.headers.authorization &&
        req.headers.authorization.startWith('Barer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return next(
            new AppError('your are not logged in ! please log to get access !')
        );
    }

    //2 verify token
    const decode = await promisify(jwt.verify(token, process.env.JWT_SERCRET));

    //3 check if user exists
    const curentUser = User.findById(decode.id);
    if (!curentUser) {
        return next(
            new AppError(
                'The user belong to this token does no longer exist ! '
            )
        );
    }
    //4 check if user change password afetr token was issued

    if (curentUser.changePasswordAfter(decode.iat)) {
        return next(
            new AppError(
                'User recently changed password !!! Please log in again !! ',
                401
            )
        );
    }

    //Grant access to protect route!!!
    req.user = curentUser;
    next();
});


//after protect midlleware, check if route is allowed to the user role
//____________________________role auth__________________________________________________
export const restrictTo = (...roles) =>
    catchAsync(async (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            next(
                new AppError(
                    'You do not have permission to perform this action',
                    403
                )
            );
        }

        next();
    });

//forgotPassword
export const forgotPassword = catchAsync(async (req, res, next) => {
    //find user based on posted email
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return next(new AppError('There is no user with email adress', 404));
    }

    //generte a token

    const resetToken = user.createPasswordResetToken();

    await user.save({ validateBeforeSave: false });

    //send it to user's email

    const resetURL = `${req.protocol}://${req.get(
        'host'
    )}/api/v1/auth/resetPassword/${resetToken}`;

    const message = `forgot your password ? Submit request with your new password and passwordConfirm to :${resetURL} .\n
    if you didn't forget your password ignore this email !!
    `;

    try {
        await sendEmail({
            email: user.email,
            subject: 'Your password reset token (valid for 10m)',
            message,
        });

        res.status(200).json({
            status: 'success',
            message: 'Token sent to your email',
        });
    } catch (error) {
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        await user.save({ validateBeforeSave: false });

        return next(
            new AppError('there was an error sending the email, try later', 500)
        );
    }
});

//rest password
export const resetPassword = catchAsync(async (req, res, next) => {
    //get  user based to the token
    console.log(req.params.token);
    const hasToken = crypto
        .createHash('sha256')
        .update(req.params.token)
        .digest('hex');
    console.log(
        '🚀 ~ file: authController.js ~ line 178 ~ resetPassword ~ hasToken',
        hasToken
    );

    const user = await User.findOne({
        passwordResetToken: hasToken,
        passwordResetExpires: { $gt: Date.now() },
    });
    console.log(
        '🚀 ~ file: authController.js ~ line 180 ~ resetPassword ~ user',
        user
    );

    //if token has not expired, and there a user, st the new password

    if (!user) {
        return next(new AppError('token is Invalid or expire ', 400));
    }

    //update changePasswordAt property for userModel
    user.password = req.body.password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    await user.save();

    //log user in , send jwt token

    const token = createToken(user);

    res.status(200).json({
        status: 'success',
        message: 'token has isModified with success',
        token,
    });
});
