import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Address} from '../models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

// tslint:disable-next-line:variable-name
constructor(private _httpClient: HttpClient) { }

  get(id: number): Observable<Address> {
    return this._httpClient.get<Address>('http:localhost:3000/address/' + id );
  }

  create(address: Address): Observable<Address> {
    return this._httpClient.post<Address>('http://localhost:3000/address', address);
  }

  update(address: number, id: Address) {
    return this._httpClient.put<Address>('http://localhost:3000/address/' + id, address);
  }

}

