import { Request, Response } from 'express';

const createUser = (req: Request, res: Response) => {
    res.send('STUB: Register user');
    // Also needs to set a token - reference the "Login and Remember Token" tests
};

const loginUser = (req: Request, res: Response) => {
    res.send('STUB: Login user');
    // {"user":{"email":"{{EMAIL}}", "password":"{{PASSWORD}}"}}
};

const getCurrentUser = (req: Request, res: Response) => {
    res.send('STUB: Get currently logged in user');
    // {"user":{"email":"{{EMAIL}}", "password":"{{PASSWORD}}"}}
};

const updateUser = (req: Request, res: Response) => {
    res.send('STUB: Update the logged in users email');
    // {"user":{"email":"{{EMAIL}}"}}
};

export { createUser, loginUser, getCurrentUser, updateUser };
