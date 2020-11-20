import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Result } from '../users.types';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  @Input() users: Result[];
}
