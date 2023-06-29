import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './types/User';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app';
  appUsers: User[] = [];

  constructor(public userService: UserService) {
    this.appUsers = this.userService.users;
  }
  
  setUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    // we create this in order to be ble to do some other things
    this.userService.addUser(inputName, inputAge); 
    this.appUsers = this.userService.users;
  }
}

// class Wallet {
//   balance = 0;
//   name = '';

//   constructor(name: string, balance: number) {
//     this.balance = balance;
//     this.name = name
//   }
// }

// class Car {
//   model = '';
//   constructor(model: string) {
//     this.model = model;
//   }
// }
// class Person {
//   wallet: Wallet;
//   car: Car;

//   constructor(car: Car, wallet: Wallet) {
//     this.car = car;
//     this.wallet = wallet
//   }
// }

// const ivansCar = new Car('BMW');
// const ivansWallet = new Wallet('Ivan', 5000);
// const ivanPerson = new Person(ivansCar, ivansWallet)
