import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../types/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush, //za da se dobavyat sled OnPush 
})
export class UsersListComponent {
@Input() users: User [] = [];

ngOnChanges() {
  console.log('invoked from ngOnVhanges');
  
}
}
