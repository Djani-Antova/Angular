import { Injectable } from '@angular/core';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User | undefined

    //here we check if there is s.th. in the localSorage
  constructor() { 

  }
}
