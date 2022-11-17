import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarsODM';

class CarService {
  public async create(newCar: ICar): Promise<ICar> {
    const carODM = new CarODM();
    const result = carODM.create(newCar);
    return result;
  }
}

export default CarService;