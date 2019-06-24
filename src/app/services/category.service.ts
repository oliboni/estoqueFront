import { Injectable } from '@angular/core';
import { Category} from '../models/category';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) { }

  get(id:number): Observable<Category> {
    return this._http.get<Category>('http://localhost:3000/categories/' + id);
  }

  getAll(): Observable<Category[]> {
    return this._http.get<Category[]>('http://localhost:3000/categories');
  }

  create(categories: Category): Observable<Category> {
    return this._http.post<Category>('http://localhost:3000/categories', categories);
  }

  update(categories: number, id: Category): Observable<Category> {
    return this._http.put<Category>('http://localhost:3000/categories/' + id, categories);
  }

  delete(id: number) {
    return this._http.delete('http://localhost:3000/categories/' + id);
  }

}
