import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDatepickerModule, MatIconModule, MatToolbarModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatNativeDateModule} from '@angular/material';

import { ProductModule} from './product/product.module';
import { CategoryModule} from './category/category.module';
import { ProviderModule} from './provider/provider.module';
import { InputModule} from './input/input.module';
import { OutputModule} from './output/output.module';
import {IndexModule} from './index/index.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,

    IndexModule,
    CategoryModule,
    ProviderModule,
    ProductModule,
    InputModule,
    OutputModule,
  ],
  providers: [HttpClientModule, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
