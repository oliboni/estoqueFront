import { ProductRoutingModule } from './product-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IndexComponent } from './index/index.component';
import { SaveComponent } from './save/save.component';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatPaginatorModule, MatTableModule} from '@angular/material';

@NgModule({
  declarations: [IndexComponent, SaveComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class ProductModule { }




