import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class UserComponent {
  @Input()
  firstName: string;
  @Input()
  lastName: string;
  @Input()
  largePicture: string;
  @Input()
  city: string;
  @Input()
  country: string;

}
