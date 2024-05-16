import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Car } from '../common/car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private baseUrl = 'http://localhost/api/cars?maxRows=12';

  constructor(private httpClient: HttpClient) {}

  getCarList(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(this.baseUrl).pipe();
  }
}
