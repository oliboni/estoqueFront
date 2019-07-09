import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [ProductService]
})
export class IndexComponent implements OnInit {

  public products = new Array<Product>();

  // tslint:disable-next-line:variable-name
  constructor( private _productService: ProductService, private _router: Router) { }
  displayedColumns: string[] = ['name', 'unitPrice', 'amount', 'category', 'actions'];
  dataSource = new MatTableDataSource<Product>(this.products);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  back() {
    this._router.navigate(['/home']);
  }

  save() {
    this._router.navigate(['/products/save']);
  }

  saveCategories() {
    this._router.navigate(['/categories/save']);
  }

  delete(id: number) {
    this._productService.delete(id).subscribe(
      data => {
        console.log(data);
        alert('Registro excluído.');
        this.getProducts();
      }, error => {
        console.log(error.error);
        this.getProducts();
      },
    );
  }

  getProducts() {
    this._productService.getAll().subscribe(data => {
      this.products = data;
      this.dataSource = new MatTableDataSource<Product>(this.products);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit() {
    this.getProducts();
  }

  applyFilter(filterValue: EventTarget) {
    // @ts-ignore
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}



