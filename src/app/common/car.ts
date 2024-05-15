import { CarEngine } from './car-engine';

export class Car {
  constructor(
    public carEngine: CarEngine,
    public brand: string,
    public model: string,
    public price: number,
    public yearProduced: number,
    public mileage: number,
    public gearType: string,
    public color: string,
    public damaged: boolean,
    public description: string
  ) {}
}
