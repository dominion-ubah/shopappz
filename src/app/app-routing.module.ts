import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './store/product-listing/product-listing.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './store/store.module#StoreModule',
    // loadChildren: './settings/settings.module#SettingsModule',
  },
];


@NgModule({
      imports: [
      RouterModule.forRoot(
        routes,
        {
          // enableTracing: true,
           useHash: true }
        // <-- debugging purposes only
      )
      ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
