import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

// modal ngx
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports: [
    HeaderComponent, FooterComponent,
    RouterModule,
    CommonModule,
    ModalModule
  ],
})
export class SharedModule { }
