import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {  
  isActive = false;

  activeUsers = [{name: 'Mitko', age: 29}, {name: 'Pesho', age: 27}, {name: 'Mariya', age: 41}, {name: 'Katya', age: 32},]

  handleClick(): void {
    this.isActive = !this.isActive;
       
  }
}
