import express from 'express';
import userRoutes from './routes/users';
import articleRoutes from './routes/articles';

const app = express();
const port = process.env.PORT || 8000;

// parse application/json
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.use('/api', userRoutes);
app.use('/api/articles', articleRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
