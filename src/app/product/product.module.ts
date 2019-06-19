import { ProductRoutingModule } from './product-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IndexComponent } from './index/index.component';
import { SaveComponent } from './save/save.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [IndexComponent, SaveComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    HttpClientModule
  ]
})
export class ProductModule { }




