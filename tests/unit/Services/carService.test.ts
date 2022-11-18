import { expect } from 'chai';
import { describe } from 'mocha';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/Cars.service';

const returnMock = {
  id: '6377777fbdc1fc289e0a4070',
  seatsQty: 5,
  doorsQty: 3,
  status: false,
  year: 2022,
  color: 'White',
  buyValue: 15.999,
  model: 'Mock',
};

const requestMock = {
  model: 'Mock',
  year: 2022,
  color: 'White',
  buyValue: 15.999,
  doorsQty: 3,
  seatsQty: 5,
};

const instance = new Car(returnMock);

describe('Camada Service de Car', () => {
  afterEach(function () {
    Sinon.restore();
  });
  
  it('Ao chamar a função "create" com sucesso é registrado um novo carro', async function () {
    Sinon.stub(Model, 'create').resolves(returnMock);
    const service = new CarService();
    const result = await service.create(requestMock);

    expect(result).to.be.eqls(instance);
  });

  it('Deve retornar um array de Car ao chamar a função "get"', async function () {
    Sinon.stub(Model, 'find').resolves([returnMock, returnMock, returnMock]);
    const service = new CarService();
    const result = await service.get();

    expect(result).to.be.eqls([instance, instance, instance]);
  });
});