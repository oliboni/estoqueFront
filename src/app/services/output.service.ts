import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Output} from '../models/output';

@Injectable({
  providedIn: 'root'
})
export class OutputService {

  // tslint:disable-next-line:variable-name
  constructor(private _httpCliente: HttpClient) { }

  get(id: number): Observable<Output> {
    return this._httpCliente.get<Output>('http://localhost:3000/inputs/' + id);
  }

  getAll(): Observable<Output[]> {
    return this._httpCliente.get<Output[]>('http://localhost:3000/inputs');
  }

  create(output: Output): Observable<Output> {
    return this._httpCliente.post<Output>('http://localhost:3000/inputs', output);
  }

  update(output: Output, id: number): Observable<Output> {
    return this._httpCliente.put<Output>('http://localhost:3000/inputs/' + id, output);
  }

  delete(id: number) {
    return this._httpCliente.delete('http://localhost:3000/inputs/' + id);
  }

}
