import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) { }

  // getAll(): Observable<Product[]> {
  //   return this._http.get<Product[]>('http://localhost:3000/products/');
  // }
  getAll(): Observable<Product[]> {
    return this._http.get<Product[]>('http://localhost:3000/products');
  }

  get(id: number): Observable<Product> {
    return this._http.get<Product>('http://localhost:3000/products/' + id);
  }

  create(product: Product): Observable<Product> {
    return this._http.post<Product>('http://localhost:3000/products', product);
  }

  update(id: number, product: Product): Observable<Product> {
    return this._http.put<Product>('http://localhost:3000/products/' + id, product);
  }

  delete(id: number) {
    return this._http.delete('http://localhost:3000/products/' + id);
  }
}
