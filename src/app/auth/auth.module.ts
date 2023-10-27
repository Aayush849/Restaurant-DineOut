import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { CreateJoinComponent } from './create-join/create-join.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent, ForgotComponent, CreateJoinComponent],
  imports: [CommonModule],
  exports: [LoginComponent, SignupComponent, ForgotComponent],
})
export class AuthModule {}
