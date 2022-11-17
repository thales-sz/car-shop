import * as express from 'express';
import CarController from '../Controllers/Cars.controller';

const router = express.Router();

router.post('/', (req, res, next) => new CarController(req, res, next).create());
router.get('/', (req, res, next) => new CarController(req, res, next).get());
router.get('/:id/', (req, res, next) => new CarController(req, res, next).getById());

export default router;