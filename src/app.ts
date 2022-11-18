import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import { carsRoute, motorcycleRoute } from './Routes';

const app = express();

app.use(express.json());

app.use('/cars', carsRoute);
app.use('/motorcycles', motorcycleRoute);

app.use(ErrorHandler.handle);

export default app;
