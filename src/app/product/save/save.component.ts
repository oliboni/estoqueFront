import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { ProductService} from '../../services/product.service';
import { Product} from '../../models/product';
import { Category} from '../../models/category';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css'],
  providers: [ProductService]
})

export class SaveComponent implements OnInit {

  public product = new Product();
  public category = new Array<Category>();

  // tslint:disable-next-line:variable-name
  constructor(private _productService: ProductService, private _router: Router, private _categoryService: CategoryService) { }

  submit() {
    if (this.product.id > 0) {
      this._productService.update(this.product.id, this.product).subscribe(
        data => {
          console.log(data);
          this._router.navigate(['/products']);
        }, error => {
          console.log('Erro: ' + error);
        }
      );
    } else {
      this._productService.create(this.product).subscribe(data => {
        console.log(data);
        this._router.navigate(['/products']);
      }, error => {
        console.log('Eroo: ' + error);
      });
    }
  }

  back() {
    this._router.navigate(['/products']);
  }


  ngOnInit() {
    this._categoryService.getAll().subscribe(data => {this.category = data; });
  }

}
