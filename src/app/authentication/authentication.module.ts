import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '../layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationRoutingModule } from './authentication-routing.module';


@NgModule({
  declarations: [
    LoginRegisterComponent,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    HttpClientModule,
    
  ]
})

export class AuthenticationModule {
  constructor() {
    console.log('AuthenticationModule loaded');
  }
}

