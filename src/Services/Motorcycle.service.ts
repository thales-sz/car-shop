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
}

export default MotorcycleService;