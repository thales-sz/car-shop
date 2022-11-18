import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private engineCapacity: number;
  private category: string;

  constructor(motor: IMotorcycle) {
    super(motor);
    this.engineCapacity = motor.engineCapacity;
    this.category = motor.category;
  }
}