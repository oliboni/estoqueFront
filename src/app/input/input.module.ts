import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputRoutingModule } from './input-routing.module';
import { IndexComponent } from './index/index.component';
import { SaveComponent } from './save/save.component';
import {
  MatButtonModule, MatCardModule, MatDatepickerModule,
  MatFormFieldModule, MatIconModule, MatInputModule,
  MatPaginatorModule, MatSelectModule, MatSortModule, MatTableModule, MatDatepicker
} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [IndexComponent, SaveComponent],
  imports: [
    CommonModule,
    InputRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    MatDatepickerModule
  ]
})
export class InputModule { }
