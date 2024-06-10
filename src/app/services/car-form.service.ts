import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarFormService {
  constructor() {}

  getCarYears(): Observable<number[]> {
    let data: number[] = [];
    let startYear: number = new Date().getFullYear();
    let endYear: number = 1980;
    for (let theYear = startYear; theYear >= endYear; theYear--) {
      data.push(theYear);
    }
    return of(data);
  }
}
