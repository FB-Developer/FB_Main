import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions,Response} from '@angular/http';
import{Observable}from'rxjs/Observable';
import'rxjs/add/operator/map';
import {serverconf} from 'assets/serverconf';
import'rxjs/Rx'
import {FBroot} from '../../fbmodel/fbrootdt';


@Injectable()
export class GetformsService {
  url1:string=serverconf.serverurl+'/users/fbformlistbydept';

  urlformdeleteurl:string=serverconf.serverurl+'/users/deletefbdetail';
  urlformdetail:string=serverconf.serverurl+'/users/fbformdetail';
  constructor(private http:Http){
  }
  getForms(ayear:string,dept:string){
    let tempurl1=this.url1+'?academicyear='+ayear+'&dept='+dept;
    console.log('****',tempurl1);
    return this.http.get(tempurl1)
      .map((response:Response)=>response.json());
  }
  deleteFbDetail(academicyear:string,dept:string,class1:string,sem:string,degree:string){
        let tempurl1=this.urlformdeleteurl+'?academicyear='+academicyear+'&dept='+dept+'&class='+class1+'&degree='+degree+'&sem='+sem;
        console.log('****',tempurl1);
        return this.http.delete(tempurl1)
          .map((response:Response)=>response.json());
  }
  getFormDetail(academicyear:string,dept:string,class1:string,sem:string,degree:string){
    let tempurl1=this.urlformdetail+'?academicyear='+academicyear+'&dept='+dept+'&class='+class1+'&degree='+degree+'&sem='+sem;
    console.log('****',tempurl1);
    return this.http.get(tempurl1)
      .map((response:Response)=>response.json());
  }
}
