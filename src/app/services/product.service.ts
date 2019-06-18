import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) { }

  getAll(): Observable<Product[]>{
    return this._http.get<Product[]>('http://localhost:3000/products');
  }

  get(id: number): Observable<Product>{
    return this._http.get<Product>('http://localhost:3000/products' + id);
  }
}
