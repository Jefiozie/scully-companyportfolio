import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserModule } from '../user/user.module';
import { UserListComponent } from './user-list.component';



@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    UserModule
  ],
  exports: [UserListComponent]
})
export class UserListModule { }
