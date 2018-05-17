import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StoreRoutingModule
  ],
  declarations: [ProductListingComponent, CartComponent, CheckoutComponent],
  exports: [

    ProductListingComponent, CartComponent, CheckoutComponent
  ]
})
export class StoreModule { }
