import { Component } from '@angular/core';
import { Car } from '../../common/car';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css',
})
export class CarListComponent {
  public cars: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.listCars();
  }

  listCars() {
    this.carService.getCarList().subscribe((data) => {
      this.cars = data;
    });
  }
}
