import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/Cars.service';

export default class CarController {
  private service: CarService;
  private req: Request;
  private res: Response;
  private next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const newCar: ICar = this.req.body;
    try {
      const result = await this.service.create(newCar);
      return this.res.status(201).json({ result });
    } catch (error) {
      this.next(error);
    }
  }
}