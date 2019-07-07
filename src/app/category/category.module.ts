import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { SaveComponent } from './save/save.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [SaveComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class CategoryModule { }
