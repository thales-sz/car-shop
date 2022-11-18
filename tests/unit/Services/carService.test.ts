import { expect } from 'chai';
import { describe } from 'mocha';
import Car from '../../../src/Domains/Car';

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
  
});