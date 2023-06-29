import { Component } from '@angular/core';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-app';

  constructor(public userService: UserService) {}
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
