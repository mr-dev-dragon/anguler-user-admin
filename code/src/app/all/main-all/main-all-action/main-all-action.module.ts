import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';



@NgModule({
  declarations: [
    AddComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainAllActionModule { }
