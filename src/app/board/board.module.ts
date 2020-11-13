import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [UserListComponent, FormComponent],
  imports: [
    CommonModule
  ]
})
export class BoardModule { }
