import { Injectable } from '@angular/core';
import {serverconf} from 'assets/serverconf';
import{Http,Response,RequestOptions,Headers} from'@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Observable } from 'rxjs/Rx';
@Injectable()
export class AuthService {
authurl1:string=serverconf.serverurl+"/login";
redirectUrl:string;
  constructor(private http:Http, private route:Router) {}
  isLoggedIn():boolean{
    let credential=localStorage.getItem('crendential');
    if(credential)
      return true;
    return false;
  }
  logout(){
    localStorage.clear();
    this.route.navigate(['']);
  }
  setRedirectUrl(url1:string){
    this.redirectUrl=url1;
    console.log('****'+this.redirectUrl);
  }
  getRedirectUrl():string{
    return this.redirectUrl;
  }
authenticate(username, password):Observable<any>
{
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  let userdetail={'userId':username,'password':password};
  return this.http.post(this.authurl1,JSON.stringify(userdetail),options)
  .map((response:Response)=>{
    console.log(response);
      return response.json();
  });
  //
  //.catch(error=>{console.log('****'+error);return Observable.of(error);});
}}
