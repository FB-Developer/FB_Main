import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './login/logout.component';

import{ReactiveFormsModule}from'@angular/forms';
import { AuthService } from './auth.service';
import {HttpModule} from '@angular/http';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,HttpModule
  ],
  declarations: [LoginComponent,LogoutComponent],
  exports:[LoginComponent],
  providers:[AuthService],
})
export class LoginModule { }
