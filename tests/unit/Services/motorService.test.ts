import { expect } from 'chai';
import { describe } from 'mocha';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/Motorcycle.service';

const idMock = '6377777fbdc1fc289e0a4070';
const idInvalidMock = '63774070';

const returnMock = {
  id: '6377777fbdc1fc289e0a4070',
  category: 'street',
  engineCapacity: 1000,
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
  category: 'street',
  engineCapacity: 1000,
};

const instance = new Motorcycle(returnMock);

describe('Camada Service de Car', () => {
  afterEach(function () {
    Sinon.restore();
  });

  it('Deve registrar um novo carro ao chamar a função "create" com sucesso', async function () {
    Sinon.stub(Model, 'create').resolves(returnMock);
    const service = new MotorcycleService();
    const result = await service.create(requestMock);

    expect(result).to.be.eqls(instance);
  });

  it('Deve retornar um array de Car ao chamar a função "get"', async function () {
    Sinon.stub(Model, 'find').resolves([returnMock, returnMock, returnMock]);
    const service = new MotorcycleService();
    const result = await service.get();

    expect(result).to.be.eqls([instance, instance, instance]);
  });

  it('Deve retornar um car especifico pelo id da req ao chamar "getById"', async function () {
    Sinon.stub(Model, 'findById').resolves(returnMock);
    const service = new MotorcycleService();
    const result = await service.getById(idMock);

    expect(result).to.be.eqls(instance);
  });

  it('Deve retornar um erro ao chamar "getById" com id invalido', async function () {
    Sinon.stub(Model, 'findById').resolves();
    const service = new MotorcycleService();
    const result = await service.getById(idInvalidMock);

    expect(result).to.be.eqls(false);
  });

  it('Deve atualizar um carro ao chamar a função "update" com sucesso', async function () {
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(returnMock);
    const service = new MotorcycleService();
    const result = await service.update(idMock, requestMock);

    expect(result).to.be.eqls(instance);
  });

  it('Deve retornar um erro ao chamar "update" com id invalido', async function () {
    Sinon.stub(Model, 'findByIdAndUpdate').resolves();
    const service = new MotorcycleService();
    const result = await service.update(idInvalidMock, requestMock);

    expect(result).to.be.eqls(false);
  });
});