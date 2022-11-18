import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/Motorcycle.service';

class MotorcycleController {
  private service: MotorcycleService;

  constructor(private req: Request, private res: Response, private next: NextFunction) {
    this.service = new MotorcycleService();
  }

  public async create() {
    const newMotorcycle = this.req.body;
    const response = await this.service.create(newMotorcycle);
    return this.res.status(201).json(response);
  }
}

export default MotorcycleController;