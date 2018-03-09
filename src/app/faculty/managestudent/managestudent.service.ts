import { Injectable } from '@angular/core';
import {serverconf} from 'assets/serverconf';
import {Http,Headers,RequestOptions,Response} from '@angular/http';
import{Observable}from'rxjs/Observable';
import'rxjs/add/operator/map';
import'rxjs/Rx'
@Injectable()
export class ManagestudentService {

  url1:string=serverconf.serverurl+'/users/getallusers'
  urlcompleted:string=serverconf.serverurl+'/users';


  constructor(private http:Http) { }
  getStudentList(academicyear:string,dept:string,class1:string,sem:string,degree:string)
  {
    let tempurl1=this.url1+'?academicyear='+academicyear+'&dept='+dept+'&class='+class1+'&degree='+degree+'&sem='+sem;
    return this.http.get(tempurl1)
      .map((response:Response)=>response.json());
  }
  insertUser(user1:any)
  {
      const url1=this.urlcompleted+'/adduser';
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this.http.post(url1,user1,options)
        .map((response:Response)=>{
          return response.json();
        });
  }
  deleteSelected(idList:string[]){
      const url2dlt:string=this.urlcompleted+'/deleteusers?idList=['+idList+']';
      return this.http.delete(url2dlt)
        .map((response:Response)=>response.json());
  }
  setCompleted(userId:string,completed:boolean){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let tempurl1;
    if(completed)
       tempurl1=this.urlcompleted+'/setcompleted';
    else
      tempurl1=this.urlcompleted+'/setcompletedfalse';
    return this.http.post(tempurl1,{'userId':userId},options)
      .map((response:Response)=>response.json());

  }

}
