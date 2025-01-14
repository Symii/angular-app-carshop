import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Car } from '../common/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  // https://spring-app-carshop-production.up.railway.app/api/cars/filter?size=10&brand=audi&priceFrom=80000&priceTo=100000
  private baseUrl =
    'https://spring-app-carshop-production.up.railway.app/api/cars?maxRows=12';
  private randomUrl =
    'https://spring-app-carshop-production.up.railway.app/api/cars/random';
  private filterUrl =
    'https://spring-app-carshop-production.up.railway.app/api/cars/filter';

  constructor(private httpClient: HttpClient) {}

  getCarList(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.randomUrl).pipe();
  }

  getCarListFilter(
    pageSize: number,
    brand: string,
    priceFrom: number,
    priceTo: number,
    body: string,
    fuelType: string,
    yearProducedFrom: number
  ): Observable<Car[]> {
    let sql = `?size=${pageSize}`;
    if (brand != null) sql += `&brand=${brand}`;
    if (priceFrom != -1) sql += `&priceFrom=${priceFrom}`;
    if (priceTo != -1) sql += `&priceTo=${priceTo}`;
    if (body != null) sql += `&body=${body}`;
    if (fuelType != null) sql += `&fuelType=${fuelType}`;
    if (yearProducedFrom != null)
      sql += `&yearProducedFrom=${yearProducedFrom}`;

    return this.httpClient.get<Car[]>(`${this.filterUrl}${sql}`);
  }

  getCarById(theId: number): Observable<Car> {
    return this.httpClient.get<Car>(
      `https://spring-app-carshop-production.up.railway.app/api/cars/${theId}`
    );
  }
}
