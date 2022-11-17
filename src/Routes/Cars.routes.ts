import * as express from 'express';
import CarController from '../Controllers/Cars.controller';

const router = express.Router();

router.post('/', (req, res, next) => new CarController(req, res, next).create());

export default router;