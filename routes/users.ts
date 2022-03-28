import { Router } from 'express';
import {
    createUser,
    getCurrentUser,
    loginUser,
    updateUser,
} from '../controllers/users';

import {
    validateNewUser
} from '../middleware/validateInput'

const router = Router();

router.post('/users', validateNewUser, createUser);
router.post('/users/login', loginUser);
router.get('/user', getCurrentUser);
router.put('/user', updateUser);

export default router;
