import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Car } from '../common/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  // http://localhost/api/cars/filter?size=10&brand=audi&priceFrom=80000&priceTo=100000
  private baseUrl = 'http://localhost/api/cars?maxRows=12';
  private filterUrl = 'http://localhost/api/cars/filter';

  constructor(private httpClient: HttpClient) {}

  getCarList(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.baseUrl).pipe();
  }

  getCarListFilter(
    pageSize: number,
    brand: string,
    priceFrom: number,
    priceTo: number
  ): Observable<Car[]> {
    let sql = `?size=${pageSize}`;
    if (brand != null) sql += `&brand=${brand}`;
    if (priceFrom != -1) sql += `&priceFrom=${priceFrom}`;
    if (priceTo != -1) sql += `&priceTo=${priceTo}`;

    return this.httpClient.get<Car[]>(`${this.filterUrl}${sql}`);
  }

  getCarById(theId: number): Observable<Car> {
    return this.httpClient.get<Car>(`http://localhost/api/cars/${theId}`);
  }
}
