import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'products-module',
    loadChildren: './product/product-routing.module#ProductRoutingModule'
  },
  {
    path: 'categories-module',
    loadChildren: './category/category-routing.module#CategoryRoutingModule'
  },
  {
    path: 'providers-module',
    loadChildren: './provider/provider-routing.module#ProviderRoutingModule'
  },
  {
    path: 'input-module',
    loadChildren: './input/input-routing.module#InputRoutingModule'
  },
  {
    path: 'output-module',
    loadChildren: './output/output-routing.module#OutputRoutingModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
