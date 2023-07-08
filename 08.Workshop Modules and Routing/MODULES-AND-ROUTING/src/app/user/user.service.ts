import { HttpClient } from '@angular/common/http'
import { Injectable, OnInit } from '@angular/core';
import { User } from '../types/User';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
  export class UserService implements OnInit {

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
      //
    }

    fetchUsers(): Observable<User[]> {
      return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
    }
  }
