import {Injectable} from'@angular/core';
import {serverconf} from 'assets/serverconf';
import {Http,Headers,RequestOptions,Response} from '@angular/http';
import{Observable}from'rxjs/Observable';
import'rxjs/add/operator/map';
import'rxjs/Rx'
import { FBrequest, FBrequestresult } from './fbmodel/fbresult';


@Injectable()
export class FBfetchDtServe{
  urlfbresult:string=serverconf.serverurl+'/users/addfbresult'

  urlfb:string=serverconf.serverurl+'/users/fbdetailv1'
  urlfbsetcompleted:string=serverconf.serverurl+'/users/setcompleted'
  constructor(private http:Http){}
  getRootDt(temp:any){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.urlfb,temp,options)
      .map((response:Response)=>response.json());

  }

  setCompletedStatus(temp:any){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.urlfbsetcompleted,temp,options)
      .map((response:Response)=>response.json());

  }

  sendFBresult(result:FBrequestresult){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.urlfbresult,result,options)
      .map((response:Response)=>response.json());

  }
}
