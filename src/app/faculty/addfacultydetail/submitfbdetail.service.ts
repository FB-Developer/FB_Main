import { Injectable } from '@angular/core';
import {serverconf} from 'assets/serverconf';
import {Http,Headers,RequestOptions,Response} from '@angular/http';
import {FBroot} from '../../fbmodel/fbrootdt'
import{Observable}from'rxjs/Observable';
import'rxjs/add/operator/map';
import'rxjs/Rx'


@Injectable()
export class SubmitfbdetailService {
  urlfb:string=serverconf.serverurl+'/users';

  constructor(private http:Http) { }
  sendFBDetail(result:FBroot){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.urlfb+'/addfbdetail',result,options)
      .map((response:Response)=>response.json());

  }

  updateFBDetail(result:FBroot){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.urlfb+'/updatefbdetail',result,options)
      .map((response:Response)=>response.json());

  }
}
