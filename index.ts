import express from 'express';
import userRoutes from './routes/users';

const app = express();
const port = process.env.PORT || 8000;

app.use('/', userRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
