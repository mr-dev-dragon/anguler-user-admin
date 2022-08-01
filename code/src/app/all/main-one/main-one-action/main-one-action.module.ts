import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [

    DeleteComponent,
    EditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainOneActionModule { }
