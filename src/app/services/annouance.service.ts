import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Annouance } from '../common/annouance';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnnouanceService {
  private annuanceUrl =
    'https://spring-app-carshop-production.up.railway.app/api/annouance/new';

  constructor(private httpClient: HttpClient) {}

  addAnnouance(annouance: Annouance): Observable<any> {
    return this.httpClient.post<Annouance>(this.annuanceUrl, annouance);
  }
}
