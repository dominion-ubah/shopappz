import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { AppRoutingModule } from './/app-routing.module';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';

import {  } from '';
import { ProductService } from './product.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,
    AppRoutingModule,
    SharedModule,
    DashboardModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
