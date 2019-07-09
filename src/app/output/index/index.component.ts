import { Component, OnInit, ViewChild} from '@angular/core';
import { Router} from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import {Output} from '../../models/output';
import {OutputService} from '../../services/output.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public outputs = new Array<Output>();

  constructor(private outputService: OutputService, private router: Router) { }
  displayedColumns: string[] = ['product', 'amount', 'unitPrice', 'totalPrice', 'actions'];
  dataSource = new MatTableDataSource<Output>(this.outputs);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  back() {
    this.router.navigate(['/homehom']);
  }

  save() {
    this.router.navigate(['/outputs/save']);
  }

  getOutput() {
    this.outputService.getAll().subscribe(data => {
      this.outputs = data;
      this.dataSource = new MatTableDataSource<Output>(this.outputs);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  delete(id: number) {
    this.outputService.delete(id).subscribe(
      data => {
        this.getOutput();
      }, error => {
        console.log(error.error);
      }
    );
  }

  ngOnInit() {
    this.getOutput();
  }

  applyFilter(filterValue: EventTarget) {
    // @ts-ignore
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
