import { Component, OnInit } from '@angular/core';
import { ProviderService} from '../../services/provider.service';
import {ActivatedRoute, Router} from '@angular/router';

import { Provider} from '../../models/provider';


@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  public provider = new Provider();

  // tslint:disable-next-line:max-line-length
  constructor(private providerService: ProviderService, private router: Router, private activedRouter: ActivatedRoute) { }

  submit() {
    if (this.provider.id > 0) {
      this.providerService.update(this.provider, this.provider.id ).subscribe(
        data => {console.log(data); this.router.navigate(['/providers']);},
        error => {console.log(error); }
       );
    } else {
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
    }
  }

}
