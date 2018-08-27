import { Injectable } from '@angular/core';
import {serverconf} from 'assets/serverconf';
import {Http,Headers,RequestOptions,Response,ResponseContentType} from '@angular/http';
import{Observable}from'rxjs/Observable';
import'rxjs/add/operator/map';
import'rxjs/Rx'
@Injectable()
export class FbresultServe {

url:string=serverconf.serverurl+'/fbresult';
  constructor(private http:Http) { }
  getOverallFB(ayear:string,dept:string){

    let tempurl1=this.url+'/overall?academicyear='+ayear+'&dept='+dept;
    console.log('****',tempurl1);
    return this.http.get(tempurl1)
      .map((response:Response)=>response.json());
  }
  getFacultyFB(ayear:string,dept:string,fname:string)
  {
      let tempurl1=this.url+'?academicyear='+ayear+'&dept='+dept+'&fname='+fname;
      console.log('****',tempurl1);
      return this.http.get(tempurl1)
        .map((response:Response)=>response.json());
  }

  export2xlsx(ayear:string,dept:string)
  {
      let tempurl1=this.url+'/export2xslx?academicyear='+ayear+'&dept='+dept;
      console.log('****',tempurl1);
      return this.http.get(tempurl1)
        .map((response:Response)=>response.json());
  }

  changePassword(uid:string,oldpwd:string,newpwd:string)
  {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(serverconf.serverurl+'/changepassword',
    {
      userId:uid,
      oldpassword:oldpwd,
      newpassword:newpwd
    },
    options)
      .map((response:Response)=>response.json());
  }
  downloadReport(fileName:string){

  return this.http.get(this.url+"/downloadreport?filename="+fileName,{ responseType: ResponseContentType.Blob})
    .map((response:Response)=>{
      return (<any>response)._body;
    })
  }
};
