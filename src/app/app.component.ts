import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Result, UsersResponse } from './uers.types';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users$: Observable<Result[]>;
  constructor(private readonly userService: UserService) {
    this.users$ = this.userService.getUser();
  }
}
