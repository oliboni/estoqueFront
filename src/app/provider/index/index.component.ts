import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

import {Provider} from '../../models/provider';
import {ProviderService} from '../../services/provider.service';
import {MatIconRegistry, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [ProviderService]
})
export class IndexComponent implements OnInit {

  public providers = new Array<Provider>();
  displayedColumns = ['cnpj', 'name', 'phone', 'actions'];
  dataSource = new MatTableDataSource<Provider>(this.providers);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  // tslint:disable-next-line:variable-name max-line-length
  constructor(private _providerService: ProviderService, private _router: Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // iconRegistry.addSvgIcon(
    //   'voltar', sanitizer.bypassSecurityTrustUrl('')
    // )

  }

  back() {
    this._router.navigate(['/']);
  }

  save() {
    this._router.navigate(['providers/save']);
  }

  delete(id: number) {
    this._providerService.delete(id).subscribe(
      data => {
        this.getProvider();
      },
      error => {
        console.log(error.error); }
   );
  }

  getProvider() {
    this._providerService.getAll().subscribe(data => {
      this.providers = data;
      this.dataSource = new MatTableDataSource<Provider>(this.providers);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit() {
    this.getProvider();
  }

  applyFilter(filterValue: EventTarget) {
    // @ts-ignore
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
