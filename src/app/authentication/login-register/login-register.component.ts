import { Component } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {
  LoginMode = true; // Alterna entre modo de inicio de sesión y registro

  switchMode() {
    this.LoginMode = !this.LoginMode;
  }

}
