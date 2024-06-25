import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  constructor(private router: Router) {}

  doSearch(
    brand: string,
    priceFrom: number,
    priceTo: number,
    body: string,
    fuelType: string,
    yearProducedFrom: number
  ) {
    this.router.navigateByUrl(
      `/osobowe/lista/${brand}-${body}-${yearProducedFrom}-${priceFrom}-${priceTo}-${fuelType}`
    );
  }
}
