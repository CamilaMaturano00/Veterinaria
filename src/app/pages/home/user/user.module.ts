import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNewEditComponent } from './user-new-edit/user-new-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [
    UserNewEditComponent,
    UserListComponent
  ]
})
export class UserModule { }
