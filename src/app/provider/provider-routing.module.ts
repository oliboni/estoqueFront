import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {SaveComponent} from './save/save.component';

const routes: Routes = [
  {
    path: 'providers',
    component: IndexComponent
  },
  {
    path: 'providers/save',
    component: SaveComponent
  },
  {
    path: 'providers/save/:id',
    component: SaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }
