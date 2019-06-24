import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { SaveComponent } from './save/save.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [SaveComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule
  ]
})
export class CategoryModule { }
