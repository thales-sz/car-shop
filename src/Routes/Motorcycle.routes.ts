import * as express from 'express';
import MotorcycleController from '../Controllers/Motorcycle.controller';

const router = express.Router();

router.post('/', (req, res, next) => new MotorcycleController(req, res, next).create());
router.get('/', (req, res, next) => new MotorcycleController(req, res, next).get());
router.get('/:id/', (req, res, next) => new MotorcycleController(req, res, next).getById());
router.put('/:id/', (req, res, next) => new MotorcycleController(req, res, next).update());

export default router;