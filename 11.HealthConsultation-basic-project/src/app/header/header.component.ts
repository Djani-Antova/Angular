import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
      
  }
  slogan: string = 'Your one stop for health consulting';

  source: string = "../../assets/doctorsHands.png"

  getSlogan() {
    return 'This is a new slogan for web application'
  }
}
