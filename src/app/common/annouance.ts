import { AnnouanceCar } from './annouance-car';
import { Car } from './car';
import { CarEngine } from './car-engine';
import { Customer } from './customer';

export class Annouance {
  constructor(
    public carEngine: CarEngine,
    public customer: Customer,
    public car: AnnouanceCar
  ) {}
}
