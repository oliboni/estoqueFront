import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../models/product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css'],
  providers: [ProductService]
})

export class SaveComponent implements OnInit {

  public product = new Product();

  // tslint:disable-next-line:variable-name
  constructor(private _productService: ProductService, private _router: Router) { }

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
  }

}
