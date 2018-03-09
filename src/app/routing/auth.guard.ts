import { Injectable } from '@angular/core';
import { CanActivate, Router,ActivatedRouteSnapshot, RouterStateSnapshot,CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from '../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authservice:AuthService, private route:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.authservice.setRedirectUrl(state.url);
      if(this.authservice.isLoggedIn()){
        let temp=localStorage.getItem('loggedInUser');
        if(temp){
          if(JSON.parse(temp).userRole=='student')
            return true;
          else if(JSON.parse(temp).userRole=='faculty'){
                  this.route.navigate(['faculty']);
                  return false;
            }
          }
      }
      this.route.navigate(['login']);
      return false;
  }
}
