import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutputRoutingModule } from './output-routing.module';
import { IndexComponent } from './index/index.component';
import { SaveComponent } from './save/save.component';
import {
  MatButtonModule, MatCardModule, MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule, MatSelectModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [IndexComponent, SaveComponent],
  imports: [
    CommonModule,
    OutputRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    MatDatepickerModule
  ]
})
export class OutputModule { }
