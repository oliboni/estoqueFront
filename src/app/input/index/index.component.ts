import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';

import {InputService} from '../../services/input.service';
import {Input} from '../../models/input';
import {Product} from '../../models/product';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public inputs = new Array<Input>();

  constructor(private inputService: InputService, private router: Router) { }
  displayedColumns: string[] = ['product', 'provider', 'date', 'amount', 'unitPrice', 'totalPrice', 'actions'];
  dataSource = new MatTableDataSource<Input>(this.inputs);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  back() {
    this.router.navigate(['/home']);
  }

  save() {
    this.router.navigate(['/inputs/save']);
  }

  getInput() {
    this.inputService.getAll().subscribe(data => {
      this.inputs = data;
      this.dataSource = new MatTableDataSource<Input>(this.inputs);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  delete(id: number) {
    this.inputService.delete(id).subscribe(
      data => {
        this.getInput();
      }, error => {
        console.log(error.error);
      }
    );
  }

  ngOnInit() {
    this.getInput();
  }

  applyFilter(filterValue: EventTarget) {
    // @ts-ignore
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
