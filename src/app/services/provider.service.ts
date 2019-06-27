import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Provider} from '../models/provider';

@Injectable({
  providedIn: 'root'
})

export class ProviderService {

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) { }

  get(id: number): Observable<Provider> {
    return this._http.get<Provider>('http://localhost:3000/providers' + id);
  }

  getAll(): Observable<Provider[]> {
    return this._http.get<Provider[]>('http://localhost:3000/providers');
  }
}