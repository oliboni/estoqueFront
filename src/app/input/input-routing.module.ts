import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent} from './index/index.component';
import {SaveComponent} from './save/save.component';

const routes: Routes = [
  {
    path: 'inputs',
    component: IndexComponent
  },
  {
    path: 'inputs/save',
    component: SaveComponent
  },
  {
    path: 'inputs/save/:id',
    component: SaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputRoutingModule { }
