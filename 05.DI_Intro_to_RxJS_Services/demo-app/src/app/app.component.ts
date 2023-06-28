import { Component } from '@angular/core';
import { User } from './types/User';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app';

  users: User[] = [
    {name: 'Ivan', age: 21},
    {name: 'Mitko', age: 29},
    {name: 'Pesho', age: 66},
    {name: 'Penka', age: 55},
  ]

  

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    const user = {
      name: inputName.value,
      age: Number(inputAge.value)
    };
    this.users = [...this.users, user]  //smenyame referenziyata s dobaveniq nov user
    //this.users.push(user);
    inputName.value = '';
    inputAge.value = '';
  }
}
