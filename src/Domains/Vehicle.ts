import IVehicle from '../Interfaces/IVehicle';

export default abstract class Vehicle {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected buyValue: number;
  protected color: string;
  protected status?: boolean;

  constructor(vehicle: IVehicle) {
    this.id = vehicle.id;
    this.status = vehicle.status;
    this.year = vehicle.year;
    this.color = vehicle.color;
    this.buyValue = vehicle.buyValue;
    this.model = vehicle.model;
  }

  public getModel() {
    return this.model;
  }
}