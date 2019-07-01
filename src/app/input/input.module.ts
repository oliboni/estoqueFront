import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputRoutingModule } from './input-routing.module';
import { IndexComponent } from './index/index.component';
import { SaveComponent } from './save/save.component';

@NgModule({
  declarations: [IndexComponent, SaveComponent],
  imports: [
    CommonModule,
    InputRoutingModule
  ]
})
export class InputModule { }
