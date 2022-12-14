import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarsODM';

class CarService {
  private carDomain(car: ICar): Car {
    return new Car(car);
  }

  public async create(newCar: ICar): Promise<Car> {
    const carODM = new CarODM();
    const response = await carODM.create(newCar);
    const car = this.carDomain(response);
    return car;
  }

  public async get(): Promise<Car[]> {
    const carODM = new CarODM();
    const response = await carODM.get();
    const carsResponse = response.map((car) => this.carDomain(car));
    return carsResponse;
  }

  public async getById(id: string): Promise<Car | boolean> {
    const carODM = new CarODM();
    const response = await carODM.getById(id);
    if (response) {
      const car = this.carDomain(response);
      return car;
    }
    return false;
  }

  public async update(id: string, body: ICar): Promise<Car | boolean> {
    const carODM = new CarODM();
    const response = await carODM.update(id, body);
    if (response) {
      const car = this.carDomain(response);
      return car;
    }
    return false;
  }
}

export default CarService;