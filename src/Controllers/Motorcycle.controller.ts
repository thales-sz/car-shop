import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/Motorcycle.service';

class MotorcycleController {
  private service: MotorcycleService;

  constructor(private req: Request, private res: Response, private next: NextFunction) {
    this.service = new MotorcycleService();
  }

  public async create() {
    try {
      const newMotorcycle = this.req.body;
      const response = await this.service.create(newMotorcycle);
      return this.res.status(201).json(response);
    } catch (error) {
      return this.next(error);
    }
  }

  public async get() {
    try {
      const response = await this.service.get();
      return this.res.status(200).json(response);
    } catch (error) {
      return this.next(error);
    }
  }

  public async getById() {
    const { id } = this.req.params;
    try {
      const response = await this.service.getById(id);
      if (!response) return this.res.status(404).json({ message: 'Motorcycle not found' });
      return this.res.status(200).json(response);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    const { body } = this.req;
    const { id } = this.req.params;
    try {
      const response = await this.service.update(id, body);
      if (!response) return this.res.status(404).json({ message: 'Motorcycle not found' });
      return this.res.status(200).json(response);
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcycleController;