import { Component, OnInit } from '@angular/core';
import { Provider} from '../../models/provider';
import { ProviderService} from '../../services/provider.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  public provider = new Provider();

  constructor(private providerService: ProviderService, private router: Router) { }

  submit() {
    if (this.provider.id > 0) {
      this.providerService.update(this.provider, this.provider.id).subscribe(
        data => {console.log(data); this.router.navigate(['/providers']); },
        error => {console.log(error); }
      );
    } else {
      this.providerService.create(this.provider).subscribe(
        data => {this.router.navigate(['/providers']); },
        error => {console.log(error); }
      );
    }
  }

  ngOnInit() {
  }

}
