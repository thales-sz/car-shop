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
      const response = await this.service.create(newCar);
      return this.res.status(201).json(response);
    } catch (error) {
      this.next(error);
    }
  }

  public async get() {
    try {
      const response = await this.service.get();
      return this.res.status(200).json(response);
    } catch (error) {
      this.next(error);
    }
  }

  public async getById() {
    const { id } = this.req.params;
    try {
      const response = await this.service.getById(id);
      if (!response) return this.res.status(404).json({ message: 'Car not found' });
      return this.res.status(200).json(response);
    } catch (error) {
      this.next(error);
    }
  }
}