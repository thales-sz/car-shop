import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  public motorDomain(motorcycle: IMotorcycle): Motorcycle {
    return new Motorcycle(motorcycle);
  }

  public async create(newMotorcycle: IMotorcycle): Promise<Motorcycle> {
    const motorODM = new MotorcycleODM();
    const response = await motorODM.create(newMotorcycle);
    const motor = this.motorDomain(response);
    return motor;
  }

  public async get(): Promise<Motorcycle[]> {
    const motorODM = new MotorcycleODM();
    const response = await motorODM.get();
    const motor = response.map((moto) => this.motorDomain(moto));
    return motor;
  }

  public async getById(id: string): Promise<Motorcycle | boolean> {
    const motorcycleODM = new MotorcycleODM();
    const response = await motorcycleODM.getById(id);
    if (response) {
      const motorcycle = this.motorDomain(response);
      return motorcycle;
    }
    return false;
  }

  public async update(id: string, body: IMotorcycle): Promise<Motorcycle | boolean> {
    const motorcycleODM = new MotorcycleODM();
    const response = await motorcycleODM.update(id, body);
    if (response) {
      const motorcycle = this.motorDomain(response);
      return motorcycle;
    }
    return false;
  }
}

export default MotorcycleService;