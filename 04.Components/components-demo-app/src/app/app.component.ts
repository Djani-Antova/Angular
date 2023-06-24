import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Title from AppComponent ';

  users = [
    { name: 'Mitko', age: 29 },
    { name: 'Pesho', age: 27 },
    { name: 'Mariya', age: 41 },
    { name: 'Katya', age: 32 },
  ];

  outputChildHandler() {
    console.log("outputChildHandler");
       
  }
}
