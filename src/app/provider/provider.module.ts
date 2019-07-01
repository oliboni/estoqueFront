import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { IndexComponent } from './index/index.component';
import { SaveComponent } from './save/save.component';
import {MatTableModule} from '@angular/material';

@NgModule({
  declarations: [IndexComponent, SaveComponent],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    MatTableModule
  ]
})
export class ProviderModule { }
