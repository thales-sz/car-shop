import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/Cars.service';

export default class CarController {
  private service: CarService;

  constructor(private req: Request, private res: Response, private next: NextFunction) {
    this.service = new CarService();
  }

  public async create() {
    const newCar: ICar = this.req.body;
    try {
      const result = await this.service.create(newCar);
      return this.res.status(201).json({ ...result });
    } catch (error) {
      this.next(error);
    }
  }
}