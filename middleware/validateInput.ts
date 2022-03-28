import { NextFunction, Request, Response } from 'express';
import isEmail from 'validator/lib/isEmail';
import isStrongPassword from 'validator/lib/isStrongPassword';
import isAlphaNumeric from 'validator/lib/isAlphanumeric';

function validateNewUser(req: Request, res: Response, next: NextFunction) {
    const { email, password, username } = req.body.user;
    console.log(email, password, username);
    if (!isEmail(email)) {
        return res.json({
            msg: 'Invalid Email',
        });
    }

    /* Remove weakOptions in a real environment for stronger password validation */
    const weakOptions = {
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 0,
    };

    if (!isStrongPassword(password, weakOptions)) {
        return res.json({
            msg: 'Insufficient Password Strength',
        });
    }

    if (!isAlphaNumeric(username)) {
        return res.json({
            msg: 'Invalid Username',
        });
    }

    next();
}

export { validateNewUser };
