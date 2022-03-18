import { Router } from 'express';
import {
    createUser,
    getLoggedInUser,
    loginUser,
    updateUser,
} from '../controllers/articles';

const router = Router();

router.post('/users', createUser);
router.post('/users/login', loginUser);
router.get('/user', getLoggedInUser);
router.put('/user', updateUser);

export default router;
