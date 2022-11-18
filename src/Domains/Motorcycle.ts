import IMotorcycle from '../Interfaces/IMotorcycle';

export default class Motorcycle {
  protected id?: string;
  private engineCapacity: number;
  private category: string;
  protected model: string;
  protected year: number;
  protected buyValue: number;
  protected color: string;
  protected status?: boolean;

  constructor(motor: IMotorcycle) {
    this.id = motor.id;
    this.engineCapacity = motor.engineCapacity;
    this.category = motor.category;
    this.status = motor.status;
    this.year = motor.year;
    this.color = motor.color;
    this.buyValue = motor.buyValue;
    this.model = motor.model;
  }

  public getModel() {
    return this.model;
  }
}