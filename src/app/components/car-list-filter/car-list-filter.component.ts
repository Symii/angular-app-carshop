import { Component } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../common/car';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-car-list-filter',
  templateUrl: './car-list-filter.component.html',
  styleUrl: './car-list-filter.component.css',
})
export class CarListFilterComponent {
  filteredCars: Car[] = [];

  constructor(
    private carService: CarService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getFilteredCars();
  }

  getFilteredCars() {
    let brand: string = '';
    let priceFrom: number = 0;
    let priceTo: number = 9999999;
    let body: string = 'sedan';
    let fuelType: string = 'benzyna';
    let yearProducedFrom: number = 1900;

    console.log("brand " + this.route.snapshot.paramMap.get('brand'));
    console.log("price from " + this.route.snapshot.paramMap.get('priceFrom'));
    console.log("price to " + this.route.snapshot.paramMap.get('priceTo'));
    console.log("body " + this.route.snapshot.paramMap.get('body'));
    console.log("fuelType " + this.route.snapshot.paramMap.get('fuelType'));
    console.log("year from " + this.route.snapshot.paramMap.get('yearProducedFrom'));

    if (this.route.snapshot.paramMap.has('brand'))
      brand = this.route.snapshot.paramMap.get('brand')!;
    if (this.route.snapshot.paramMap.has('priceFrom'))
      priceFrom = +this.route.snapshot.paramMap.get('priceFrom')!;
    if (this.route.snapshot.paramMap.has('priceTo'))
      priceTo = +this.route.snapshot.paramMap.get('priceTo')!;
    if (this.route.snapshot.paramMap.has('body'))
      body = this.route.snapshot.paramMap.get('body')!;
    if (this.route.snapshot.paramMap.has('fuelType'))
      fuelType = this.route.snapshot.paramMap.get('fuelType')!;
    if (this.route.snapshot.paramMap.has('yearProducedFrom'))
      yearProducedFrom = +this.route.snapshot.paramMap.get('yearProducedFrom')!;

    // TODO: work to do pageSize
    let pageSize: number = 100;
    this.carService
      .getCarListFilter(
        pageSize,
        brand,
        +priceFrom,
        +priceTo,
        body,
        fuelType,
        yearProducedFrom
      )
      .subscribe((data: any) => {
        this.filteredCars = data;
      });
  }

  scrollToTop(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
}
