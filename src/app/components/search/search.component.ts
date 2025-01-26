import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  public carCount: number = 0;
  public carBrands: string[] = [];

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit(): void {
    this.listCarBrands();
    this.getCarCount();
  }

  getCarCount() {
    this.carService.getCarCount().subscribe((data) => {
      this.carCount = data;
    });
  }

  listCarBrands() {
    this.carService.getCarBrandList().subscribe((data) => {
      this.carBrands = data;
    });
  }

  doSearch(
    brand: string,
    priceFrom: number,
    priceTo: number,
    body: string,
    fuelType: string,
    yearProducedFrom: number
  ) {
    this.router.navigateByUrl(
      `/osobowe/lista/${brand}/${body}/${yearProducedFrom}/${priceFrom}/${priceTo}/${fuelType}`
    );
  }
}
