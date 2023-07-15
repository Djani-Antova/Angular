import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  //another approach to get the form login without passing it as a prop
  submitHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    form.setValue({ email: '', password: '' });
    const value: { email: string; password: string } = form.value;
    console.log({ value });
    
  }
}
