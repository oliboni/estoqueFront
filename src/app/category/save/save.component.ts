import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { CategoryService } from '../../services/category.service';
import {Category} from '../../models/category';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  public category = new Category();

  // tslint:disable-next-line:variable-name
  constructor(private _router: Router, private _categoryService: CategoryService) { }

  submit() {
    if (this.category.id > 0) {
      this._categoryService.update(this.category.id, this.category).subscribe(
        data => { this._router.navigate(['/products']); }, error => {console.log('Erro: ' + error); }
      );
    } else {
      this._categoryService.create(this.category).subscribe(
        data => {
          console.log(data);
          this._router.navigate(['/products']);
        }, error => { console.log('Erro: ' + error); },
      );
    }


  }

  back() {
    this._router.navigate(['/products']);
  }

  ngOnInit() {
  }

}
