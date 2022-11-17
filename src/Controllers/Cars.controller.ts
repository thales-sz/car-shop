import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';

export default class CarController {
  private carService: CarService;
  constructor() {
    this.carService = new CarService();
  }

  public create(req: Request, res: Response, next: NextFunction) {
    const newCar: ICar = req.body;
  }
}