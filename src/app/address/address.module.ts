import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule } from './address-routing.module';
import { SaveComponent } from './save/save.component';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material';

@NgModule({
  declarations: [SaveComponent],
  imports: [
    CommonModule,
    AddressRoutingModule,
    FormsModule,
    MatInputModule
  ]
})
export class AddressModule { }
