import { NextFunction, Request, RequestHandler, Response } from 'express';
import isEmail from 'validator/lib/isEmail';
import isStrongPassword from 'validator/lib/isStrongPassword';
import isAlphaNumeric from 'validator/lib/isAlphanumeric';

const validateRegisterInput: RequestHandler = (req, res, next) => {
    const { email, password, username } = req.body.user;

    /* Remove weakOptions in a real environment for stronger password validation */
    const weakOptions = {
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 0,
    };
    console.log('validate middleware called');
    try {
        if (!email || !password || !username) {
            throw new Error('Missing a form field');
        } else if (!isEmail(email)) {
            throw new Error('Invalid Email');
        } else if (!isStrongPassword(password, weakOptions)) {
            throw new Error('Insufficient Password Strength');
        } else if (!isAlphaNumeric(username)) {
            throw new Error('Invalid Username');
        } else {
            next();
        }
    } catch (err) {
        next(err);
    }
};

export { validateRegisterInput };
