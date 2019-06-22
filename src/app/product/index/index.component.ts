import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Router } from '@angular/router';
import { Category } from '../../models/category';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [ProductService]
})
export class IndexComponent implements OnInit {

  public products = new Array<Product>();
  public categories = new Array<Category>();

  // tslint:disable-next-line:variable-name
  constructor( private _productService: ProductService, private _router: Router) { }

  save() {
    this._router.navigate(['/products/save']);
  }

  setCategories(categories: Category[]) {
    this.categories = categories;
  }

  ngOnInit() {
    this._productService.getAll().subscribe(data => {
      this.products = data;
    });
  }
}

