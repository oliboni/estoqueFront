import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {InputService} from '../../services/input.service';
import {ProductService} from '../../services/product.service';
import {ProviderService} from '../../services/provider.service';

import {Input} from '../../models/input';
import {Product} from '../../models/product';
import {Provider} from '../../models/provider';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  public inputs = new Input();
  public product = new Array<Product>();
  public provider = new Array<Provider>();

  // tslint:disable-next-line:max-line-length
  constructor(private inputService: InputService, private productService: ProductService, private providerService: ProviderService, private router: Router, private activatedRoute: ActivatedRoute) { }

  back() {
    this.router.navigate(['/inputs']);
  }

  submit() {
    if (this.inputs.id > 0) {
      this.inputService.update(this.inputs, this.inputs.id).subscribe(
        data => {

          console.log(data);
          this.router.navigate(['/inputs']);
        }, error => {
          console.log('Erro: ' + error);
        }
      );
    } else {
      this.inputService.create(this.inputs).subscribe(data => {
        console.log(data);
        this.router.navigate(['/inputs']);
      }, error => {
        console.log('Eroo: ' + error);
      });
    }
  }

  ngOnInit() {
    this.productService.getAll().subscribe(data => {this.product = data; });
    this.providerService.getAll().subscribe(data => {this.provider = data; });

    let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    if (id > 0) {
      this.inputService.get(id).subscribe(
        data => {this.inputs = data; },
        error => {console.log(error); }
      );
    }
  }

}
