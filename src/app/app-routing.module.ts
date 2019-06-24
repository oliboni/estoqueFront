import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'products-module',
    loadChildren: './product/product-routing.module#ProductRoutingModule'
  },
  {
    path: 'categories-module',
    loadChildren: './category/catego-routing.module#CategoryRoutingModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
