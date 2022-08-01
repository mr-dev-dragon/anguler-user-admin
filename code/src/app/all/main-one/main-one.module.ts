import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterOneComponent } from './footer-one/footer-one.component';
import { HeaderOneComponent } from './header-one/header-one.component';



@NgModule({
  declarations: [

    FooterOneComponent,
    HeaderOneComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainOneModule { }
