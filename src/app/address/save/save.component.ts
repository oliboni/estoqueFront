import { Component, OnInit } from '@angular/core';
import {Address} from '../../models/address';
import {Router} from '@angular/router';
import {AddressService} from '../../services/address.service';


@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  public address = new Address();

  // tslint:disable-next-line:variable-name
  constructor(private _router: Router, private _addressServce: AddressService) { }

  submit() {
    if(this.address.id > 0){
      this._addressServce.update(this.address.id, this.address).subscribe(
        data => {this._router.navigate(['/providers']); }, error => { console.log(error);}
      );
    } else {
      this._addressServce.create(this.address).subscribe(
        data => {console.log(data); this._router.navigate(['/providers']); }, error => {console.log('Erro:' + error); }
      );
    }
  }

  back() {
    this._router.navigate(['/providers']);
  }

  ngOnInit() {

  }

}
