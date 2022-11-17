import ICar from '../Interfaces/ICar';

export default class Car implements ICar {
  public id?: string | undefined;
  public doorsQty: number;
  public seatsQty: number;
  public model: string;
  public year: number;
  public buyValue: number;
  public color: string;
  public status?: boolean | undefined;

  constructor(objIcar: ICar) {
    this.seatsQty = objIcar.seatsQty;
    this.doorsQty = objIcar.doorsQty;
    this.status = objIcar.status;
    this.year = objIcar.year;
    this.color = objIcar.color;
    this.buyValue = objIcar.buyValue;
    this.model = objIcar.model;
  }
}