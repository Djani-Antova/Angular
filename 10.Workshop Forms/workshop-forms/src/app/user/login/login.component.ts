import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DEFAULT_DOMAIN_EMAILS } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  appEmailDomains = DEFAULT_DOMAIN_EMAILS;

  constructor(private userService: UserService, private router:Router) { }

  login(form: NgForm): void {
    //TODO for now we are not handling the data
    console.log(form.value);
    
    // this.userService.login();
    // this.router.navigate(['/'])
    
  }  

}