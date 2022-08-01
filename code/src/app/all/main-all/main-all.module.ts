import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { AlertComponent } from './alert/alert.component';



@NgModule({
  declarations: [
    TableComponent,
    AlertComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainAllModule { }
