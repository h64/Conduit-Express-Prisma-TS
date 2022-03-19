import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createUser = async (req: Request, res: Response) => {
    const { email, password, username } = req.body.user;

    const newUser = await prisma.user.create({
        data: {
            email,
            token: password,
            username,
        },
    });

    res.json({ user: newUser });
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
