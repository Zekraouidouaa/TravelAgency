import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email :string = "";
  password :string = "";
  error :string = "";

  navigate(){
    if(this.email=="Travel_Agency@gmail.com" && this.password == "123456789")
      window.location.href = 'admin/dashboard';
    else
      this.error = "Try Again!";
  }
}
