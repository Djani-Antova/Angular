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

  constructor() {
    setInterval(() => {
      this.users.push({
        name: "DemoName",
        age: 0,
      })
    })
  }

  

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

class Wallet {
  balance = 0;
  name = '';

  constructor(name: string, balance: number) {
    this.balance = balance;
    this.name = name
  }
}

class Car {
  model = '';
  constructor(model: string) {
    this.model = model;
  }
}
class Person {
  wallet: Wallet;
  car: Car;

  constructor(car: Car, wallet: Wallet) {
    this.car = car;
    this.wallet = wallet
  }
}

const ivansCar = new Car('BMW');
const ivansWallet = new Wallet('Ivan', 5000);
const ivanPerson = new Person(ivansCar, ivansWallet)
