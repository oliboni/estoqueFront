import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {SaveComponent} from './save/save.component';

const routes: Routes = [
  {
    path: 'outputs',
    component: IndexComponent
  },
  {
    path: 'outputs/save',
    component: SaveComponent
  },
  {
    path: 'outputs/save/:id',
    component: SaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutputRoutingModule { }
