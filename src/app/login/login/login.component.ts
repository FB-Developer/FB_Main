import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormArray,FormBuilder} from '@angular/forms'
import { Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import{Router}from'@angular/router'

@Component({
  selector: 'fblogin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFG:FormGroup;
  mesg;
  flag:boolean=false;
  constructor(private fb:FormBuilder,private _authservice:AuthService,private route:Router) {
  }
  ngOnInit() {
    this.loginFG=this.fb.group({
      'username':['',Validators.required],
      'password':['',Validators.required]
    });
  }
 login(data){
  this.flag=true;
  this._authservice.authenticate(data.username,data.password)
  .subscribe((data)=>{
    if(!data.success){
      this.mesg=data.mesg;
    }
    else{
      this.mesg="Successfully Loggedin";
      localStorage.setItem("crendential",data.crendential);
      localStorage.setItem("loggedInUser",JSON.stringify(data.mesg));
      if(this._authservice.redirectUrl)
        this.route.navigateByUrl(this._authservice.redirectUrl);
      else if(data.mesg.userRole=='student')
          this.route.navigate(['fbform']);
      else if(data.mesg.userRole=='faculty')
        this.route.navigate(['faculty']);
      else if(data.mesg.userRole=='principal')
        this.route.navigate(['fbresult']);
    }
    this.flag=false;
  },(error)=>{
    this.mesg="Error in loading Data,Connection Problem"+" || "+error;
    this.flag=false;
  });
 }
}
