import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

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
  displayedColumns: string[] = ['id', 'Nome', 'Preço', 'Quantidade', 'Categoria'];
  dado: MatTableDataSource<Product>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  private dataSource: MatTableDataSource<Product>;


  // tslint:disable-next-line:variable-name
  constructor( private _productService: ProductService, private _router: Router) {

    const products = Product;
    // @ts-ignore
    this.dataSource = new MatTableDataSource(products);
  }

  save() {
    this._router.navigate(['/products/save']);
  }

  saveCategories() {
    this._router.navigate(['/categories/save']);
  }

  delete(id: number, key: number) {
    this._productService.delete(id).subscribe(
      data => {
        this.products.splice(key, 1);
      }, error => {
        console.log(error.error);
      }
    );
  }

  ngOnInit() {
    this._productService.getAll().subscribe(data => {
      this.products = data;
      this.dado.paginator = this.paginator;
      this.dado.sort = this.sort;
    });
  }

  applyFilter(filterValue: EventTarget) {
    // @ts-ignore
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dado.paginator) {
      this.dado.paginator.firstPage();
    }
  }
}



