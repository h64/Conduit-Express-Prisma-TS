import { RequestHandler } from 'express';
import { PrismaClient } from '@prisma/client';
import { hash, compare } from 'bcrypt';

const prisma = new PrismaClient();

const createUser: RequestHandler = async (req, res, next) => {
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
        next(err);
    }
};

const loginUser: RequestHandler = async (req, res, next) => {
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
        next(err);
    }
};

const getCurrentUser: RequestHandler = (req, res) => {
    res.send('STUB: Get currently logged in user');
    // {"user":{"email":"{{EMAIL}}", "password":"{{PASSWORD}}"}}
};

const updateUser: RequestHandler = (req, res) => {
    res.send('STUB: Update the logged in users email');
    // {"user":{"email":"{{EMAIL}}"}}
};

export { createUser, loginUser, getCurrentUser, updateUser };
