import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/Cars.service';

export default class CarController {
  private service: CarService;
  constructor() {
    this.service = new CarService();
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    const newCar: ICar = req.body;
    try {
      const result = await this.service.create(newCar);
      return res.status(201).json({ result });
    } catch (error) {
      next(error);
    }
  }
}