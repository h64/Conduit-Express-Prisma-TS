import { RequestHandler } from 'express';

const getArticles:RequestHandler = (req, res) => {
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

const showArticle: RequestHandler = (req, res) => {
    res.send('STUB: Show one article');
};

const createArticle: RequestHandler = (req, res) => {
    res.send('STUB: Create an article');
};

const updateArticle: RequestHandler = (req, res) => {
    res.send('STUB: Update an article');
};

const deleteArticle: RequestHandler = (req, res) => {
    res.send('STUB: Delete an article');
};

const getFeed: RequestHandler = (req, res) => {
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
