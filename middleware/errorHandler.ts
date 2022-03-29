import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { ErrorRequestHandler } from 'express';
import { PrismaErrors } from '../types/Errors';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.log('Error Handling Middleware called on Path:', req.path);

    if (err instanceof PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
            return res.status(422).json({
                errors: {
                    body: [`Error: ${PrismaErrors['P2002']}`],
                },
            });
        }
    } else if (err instanceof Error) {
        return res.status(422).json({
            errors: {
                body: [`Error: ${err.message}`],
            },
        });
    } else if (typeof err === 'string') {
        return res.status(422).json({
            errors: {
                body: [`Error: ${err}`],
            },
        });
    } else {
        /* Implicit behavior for any unhandled errors is to 404... could be improved.*/
        next();
    }
};

export default errorHandler;
