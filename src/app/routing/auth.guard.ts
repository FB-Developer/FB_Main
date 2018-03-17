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
          if(state.url.indexOf('fbform')!=-1 && JSON.parse(temp).userRole=='student')
            return true;
          else if(state.url.indexOf('faculty')!=-1 && JSON.parse(temp).userRole=='faculty')
            return true;
          else if(state.url.indexOf('fbresult')!=-1 && JSON.parse(temp).userRole=='principal')
              return true;
        }
      }
      this.route.navigate(['autherror',"Authentication Error"]);
      return false;
    }
}
