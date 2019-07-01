import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {Provider} from '../../models/provider';
import {ProviderService} from '../../services/provider.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [ProviderService]
})
export class IndexComponent implements OnInit {

  public providers = new Array<Provider>();
  columnsToDisplay = ['id', 'cnpj', 'name', 'phone'];

  // tslint:disable-next-line:variable-name
  constructor(private _providerService: ProviderService, private _router: Router) { }

  back() {
    this._router.navigate(['/']);
  }

  save() {
    this._router.navigate(['providers/save']);
  }

  ngOnInit() {
    this._providerService.getAll().subscribe(data => {this.providers = data; });
  }

}
