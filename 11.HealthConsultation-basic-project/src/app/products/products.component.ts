import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }

  products = [
    { "_id": 1, "username": "John Smith", "available": "Not Available", "email": "john@users.bg", "age": 51 },
    { "_id": 2, "username": "Peter Johnson", "available": "Available", "email": "peter@users.bg", "age": 43 },
    { "_id": 3, "username": "Mary Poppins",  "available": "Not Available", "email": "mary@users.bg","age": 29 },
    { "_id": 4,"username": "George Milner", "available": "Available", "email": "george@users.bg", "age": 35 },
    { "_id": 5, "username": "Bob Robertson", "available": "Not Available", "email": "bob@users.bg", "age": 39 }
  ];

}
