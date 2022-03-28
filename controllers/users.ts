import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { hash, compare } from 'bcrypt';

const prisma = new PrismaClient();

const createUser = async (req: Request, res: Response) => {
    const { email, password, username } = req.body.user;

    const saltRounds = 10;
    const hashed = await hash(password, saltRounds);

    try {
        const newUser = await prisma.user.create({
            data: {
                email,
                username,
                password: hashed,
            },
        });

        res.json({
            user: {
                email: newUser.email,
                username: newUser.username,
                bio: newUser.bio,
                image: newUser.image,
                token: null,
            },
        });
    } catch (err) {
        console.log(err);
        res.send({
            msg: 'Failed to Register',
        });
    }
};

const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body.user;
    try {
        if (!email || !password) throw new Error('Missing inputs');

        const foundUser = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        const match = await compare(password, foundUser?.password ?? '');
        if (!match) throw new Error('Invalid password');
        
        const withoutPassword = { ...foundUser };
        delete withoutPassword.password;

        res.json({ user: withoutPassword });
    } catch (err) {
        console.log(err);
        res.json({
            msg: 'Failed to Login',
        });
    }
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
