import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserListModule } from '../user-list/user-list.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    UserListModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent },
    ])
  ]
})
export class HomeModule { }
