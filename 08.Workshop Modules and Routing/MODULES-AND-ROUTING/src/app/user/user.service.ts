import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { User } from '../types/User';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
  export class UserService {

    constructor(private http: HttpClient) { }   

    fetchUsers(): Observable<User[]> {
      return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
    }
    fetchSingleUser(id: number): Observable<User> {
      return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
    }
  }
