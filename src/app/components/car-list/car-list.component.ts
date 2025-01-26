import { Component } from '@angular/core';
import { Car } from '../../common/car';
import { CarService } from '../../services/car.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css',
})
export class CarListComponent {
  public cars: Car[] = [];
  constructor(private carService: CarService, private router: Router) {}

  ngOnInit(): void {
    this.listCars();
  }

  listCars() {
    this.carService.getCarList().subscribe((data) => {
      this.cars = this.shuffleArray(data);
    });
  }

  shuffleArray(array: Car[]): Car[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  scrollToTop(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
