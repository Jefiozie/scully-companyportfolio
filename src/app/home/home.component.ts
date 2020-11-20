import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../users.types';
import { UserService } from '../user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users$: Observable<Result[]>;
  constructor(private readonly userService: UserService) {
    this.users$ = this.userService.getUser();
  }

}
