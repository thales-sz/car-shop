import * as express from 'express';
import MotorcycleController from '../Controllers/Cars.controller';

const router = express.Router();

router.post('/', (req, res, next) => new MotorcycleController(req, res, next).create());

export default router;