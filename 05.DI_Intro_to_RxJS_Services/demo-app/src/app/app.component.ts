import { Component } from '@angular/core';
import { UserService } from './user.service';
import { User } from './types/User';
import { Observable } from 'rxjs';


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

// async analogy
// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve (1200)
//   }, 2000);
// });

// p.then((data) => console.log('promise', data))
//   .then()
//   .then();

// sync analogy Promise
[1].map((x) => x * 2).map((x) => x * 10);

// async analogy Promise
Promise.resolve(100)
  .then((d) => d * 10)
  .then((x) => console.log('data from promise: ',x));


// sync analogy Observable
[1, 2, 3, 4].map((x) => x * 2).map((x) => x * 10);

// sync analogy Observable
const o = new Observable(observer =>{
  // observer.next(1000);
  // observer.next(2000);
  // observer.next(3000);

  let counter = 0;
  setInterval(() => {
    observer.next(counter++)
  }, 2000)
});

o.subscribe(data => {
  console.log('data from observer: ', data);
  
})
