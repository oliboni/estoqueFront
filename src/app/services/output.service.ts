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
    return this._httpCliente.get<Output>('http://localhost:3000/outputs/' + id);
  }

  getAll(): Observable<Output[]> {
    return this._httpCliente.get<Output[]>('http://localhost:3000/outputs');
  }

  create(output: Output): Observable<Output> {
    return this._httpCliente.post<Output>('http://localhost:3000/outputs', output);
  }

  update(output: Output, id: number): Observable<Output> {
    return this._httpCliente.put<Output>('http://localhost:3000/outputs/' + id, output);
  }

  delete(id: number) {
    return this._httpCliente.delete('http://localhost:3000/outputs/' + id);
  }

}
