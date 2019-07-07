import { Component, OnInit } from '@angular/core';
import { ProviderService} from '../../services/provider.service';
import {ActivatedRoute, Router} from '@angular/router';

import { Provider} from '../../models/provider';
import {Address} from '../../models/address';
import {AddressService} from '../../services/address.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  public provider = new Provider();
  public address = new Address();

  // tslint:disable-next-line:max-line-length
  constructor(private providerService: ProviderService, private addressService: AddressService, private router: Router, private activedRouter: ActivatedRoute) { }

  submitAddress() {
    if (this.address.id > 0) {
      this.addressService.update(this.provider.idAddress, this.address).subscribe(
      data => {console.log(data); this.router.navigate(['/providers']); },
      error => {console.log(error); }
    );
    } else {
      this.addressService.create(this.address).subscribe(
        data => {
          console.log('Endereço cadastrado com sucesso: ', data);
          this.provider.idAddress = data.id;
          console.log('ID', this.provider.idAddress);
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  submit() {
    if (this.provider.id > 0) {
      this.submitAddress();
      this.providerService.update(this.provider, this.provider.id ).subscribe(
        data => {console.log(data); },
        error => {console.log(error); }
       );
    } else {
        this.submitAddress();
        this.providerService.create(this.provider).subscribe(
        data => {
          this.router.navigate(['/providers']); },
        error => {console.log(error); }
      );
    }
  }

  back() {
    this.router.navigate(['/providers']);
  }

  ngOnInit() {
    let id = Number(this.activedRouter.snapshot.paramMap.get('id'));

    if (id > 0) {
      this.providerService.get(id).subscribe(
        data => {this.provider = data; },
        error => {console.log(error); }
      );
      this.addressService.get(this.provider.idAddress).subscribe(
        dado => {this.address = dado; },
        error => {console.log(error); }
      );
    }
  }

}
