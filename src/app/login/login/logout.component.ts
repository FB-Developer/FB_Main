import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormArray,FormBuilder} from '@angular/forms'
import { Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  template:``
})
export class LogoutComponent{
  constructor(private _authservice:AuthService) {
    _authservice.logout();
   }
 }
