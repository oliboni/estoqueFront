import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Output} from '../../models/output';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';
import {OutputService} from '../../services/output.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  public outputs = new Output();
  public product = new Array<Product>();

  // tslint:disable-next-line:max-line-length
  constructor(private outputService: OutputService, private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) { }

  back() {
    this.router.navigate(['/outputs']);
  }

  submit() {
    if (this.outputs.id > 0) {
      this.outputService.update(this.outputs, this.outputs.id).subscribe(
        data => {

          console.log(data);
          this.router.navigate(['/inputs']);
        }, error => {
          console.log('Erro: ' + error);
        }
      );
    } else {
      this.outputService.create(this.outputs).subscribe(data => {
        console.log(data);
        this.router.navigate(['/inputs']);
      }, error => {
        console.log('Eroo: ' + error);
      });
    }
  }

  ngOnInit() {
    this.productService.getAll().subscribe(data => {this.product = data;} );
    let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    if (id > 0) {
      this.outputService.get(id).subscribe(
        data => {this.outputs = data; },
        error => {console.log(error); }
      );
    }
  }

}
