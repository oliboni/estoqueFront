import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Input} from '../models/input';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  // tslint:disable-next-line:variable-name
  constructor(private _httpCliente: HttpClient) { }

  get(id: number): Observable<Input> {
    return this._httpCliente.get<Input>('http://localhost:3000/inputs/' + id);
  }

  getAll(): Observable<Input[]> {
    return this._httpCliente.get<Input[]>('http://localhost:3000/inputs');
  }

  create(input: Input): Observable<Input> {
    return this._httpCliente.post<Input>('http://localhost:3000/inputs', input);
  }

  update(input: Input, id: number): Observable<Input> {
    return this._httpCliente.put<Input>('http://localhost:3000/inputs/' + id, input);
  }

  delete(id: number) {
    return this._httpCliente.delete('http://localhost:3000/inputs/' + id);
  }

}
