import { Router } from 'express';
import {
    getArticles,
    showArticle,
    createArticle,
    updateArticle,
    deleteArticle,
    getFeed,
} from '../controllers/articles';

const router = Router();

router.get('/', getArticles);
router.get('/:slug', showArticle);
router.post('/', createArticle);
router.put('/:slug', updateArticle);
router.delete('/:slug', deleteArticle);
router.get('/feed', getFeed);

export default router;
