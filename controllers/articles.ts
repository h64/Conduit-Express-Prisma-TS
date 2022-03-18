import { Request, Response } from 'express';

const createUser = (req: Request, res: Response) => {
    res.send('STUB: Register user');
    // {"user":{"email":"{{EMAIL}}", "password":"{{PASSWORD}}", "username":"{{USERNAME}}"}}
};

const loginUser = (req: Request, res: Response) => {
    res.send('STUB: Login user');
    // {"user":{"email":"{{EMAIL}}", "password":"{{PASSWORD}}"}}
};

const getLoggedInUser = (req: Request, res: Response) => {
    res.send('STUB: Get currently logged in user');
    // {"user":{"email":"{{EMAIL}}", "password":"{{PASSWORD}}"}}
};

const updateUser = (req: Request, res: Response) => {
    res.send('STUB: Update the logged in users email');
    // {"user":{"email":"{{EMAIL}}"}}
};

export { createUser, loginUser, getLoggedInUser, updateUser };
