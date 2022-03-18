import { Request, Response } from 'express';

const getArticles = (req: Request, res: Response) => {
    res.send('STUB: Get all articles');
    /*
        All Articles
        Articles By Author
        Articles By Author with Auth
        Articles Favorited by Username
        Articles by Tag
        All Articles with Auth
        Single Article by slug
        Articles by tag
    */
};

const showArticle = (req: Request, res: Response) => {
    res.send('STUB: Show one article');
};

const createArticle = (req: Request, res: Response) => {
    res.send('STUB: Create an article');
};

const updateArticle = (req: Request, res: Response) => {
    res.send('STUB: Update an article');
};

const deleteArticle = (req: Request, res: Response) => {
    res.send('STUB: Delete an article');
};

const getFeed = (req: Request, res: Response) => {
    res.send('STUB: Get Feed');
};

export {
    getArticles,
    showArticle,
    createArticle,
    updateArticle,
    deleteArticle,
    getFeed,
};
