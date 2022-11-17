import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import carsRoute from './Routes';

const app = express();

app.use(express.json());

app.use('/cars', carsRoute);

app.use(ErrorHandler.handle);

export default app;
