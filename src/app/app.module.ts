import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule} from './product/product.module';
import { CategoryModule} from './category/category.module';
import { ProviderModule} from './provider/provider.module';
import {AddressModule} from './address/address.module';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CategoryModule,
    ProviderModule,
    AddressModule,
    ProductModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
