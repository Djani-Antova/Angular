import { Injectable } from '@angular/core';
import { User } from '../types/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user; // to reassure it's boolean and not sometype of falsu cases that we are not interesed in
  }

  constructor() { 
    try {
      const lsUser = localStorage.getItem(this.USER_KEY);
      if (lsUser) {
        this.user = JSON.parse(lsUser); // Parse the JSON string into a User object
      }

    } catch (error) {
      this.user = undefined;
    }
  }

  login() : void {
    this.user = {
      email: 'john.doe@gmail.com',
      firstName: 'John'
    };
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))

  };

  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY)
  };
}

