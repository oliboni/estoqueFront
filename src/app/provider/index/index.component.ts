import { Component, OnInit } from '@angular/core';
import {Provider} from '../../models/provider';
import {ProviderService} from '../../services/provider.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public providers = new Array<Provider>();

  // tslint:disable-next-line:variable-name
  constructor(private _providerService: ProviderService, private _router: Router) { }

  back() {
    this._router.navigate(['/']);
  }

  ngOnInit() {
    this._providerService.getAll().subscribe(data => {this.providers = data; });
  }

}
