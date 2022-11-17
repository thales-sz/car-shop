import ICar from '../Interfaces/ICar';

export default class Car {
  protected id?: string | undefined;
  private doorsQty: number;
  private seatsQty: number;
  protected model: string;
  protected year: number;
  protected buyValue: number;
  protected color: string;
  protected status?: boolean | undefined;

  constructor(car: ICar) {
    this.seatsQty = car.seatsQty;
    this.doorsQty = car.doorsQty;
    this.status = car.status;
    this.year = car.year;
    this.color = car.color;
    this.buyValue = car.buyValue;
    this.model = car.model;
  }
}