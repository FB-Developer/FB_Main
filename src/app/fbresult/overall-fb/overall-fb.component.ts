import { Component, OnInit } from '@angular/core';
import {FbresultService} from '../fbresult.service';
import {Router} from '@angular/router';
import {config} from '../../faculty/facultyconfig';
import swal from 'sweetalert2';

@Component({
  selector: 'fb-overall-fb',
  templateUrl: './overall-fb.component.html',
  styleUrls: ['./overall-fb.component.css']
})
export class OverallFbComponent implements OnInit {

overallFB:any[];
academicyearList=config.academicyearList;
departmentList=config.departmentList;
academicyear:string='2017-18';
dept:string='CE';
changePwdDlg=false;loggedInUser;
mesg;errmesg;
flag:boolean=false;
  constructor(private fbserv:FbresultService, private router:Router) { }

  resultDetail(fname)
  {
    console.log("###",fname,this.academicyear,this.dept);
    this.router.navigate(['fbresult/overallfb/fbresultdetail',this.academicyear,this.dept,fname]);

  }
  ngOnInit() {
    let temp  = JSON.parse(localStorage.getItem('loggedInUser'));
    this.loggedInUser=temp.userId;
    this.fbserv.getOverallFB('2017-18','CE')
      .subscribe((dt)=>{
        this.overallFB=dt;

        for(let indx=0;indx<dt.length;indx++)
        {
            this.overallFB[indx].fbchartdt=new Array();
            this.overallFB[indx].fbchartrating=new Array();
            for(let temp of dt[indx].rating_group)
            {
                this.overallFB[indx].fbchartrating.push(temp.rating);
                this.overallFB[indx].fbchartdt.push(temp.count);
            }
        }
      });
  }
  export2xlsx(){
    if(this.academicyear&&this.dept)
    {
      this.fbserv.export2xlsx(this.academicyear,this.dept)
        .subscribe((dt)=>{
          if(dt.status)
           this.mesg=dt.mesg;
          else
          this.errmesg=dt.mesg;
        });
    }
  }

  loadFormField(){

    if(this.academicyear&&this.dept)
    {
      this.fbserv.getOverallFB(this.academicyear,this.dept)
        .subscribe((dt)=>{
          this.overallFB=dt;
          for(let indx=0;indx<dt.length;indx++)
          {
              this.overallFB[indx].fbchartdt=new Array();
              this.overallFB[indx].fbchartrating=new Array();
              for(let temp of dt[indx].rating_group)
              {
                  this.overallFB[indx].fbchartrating.push(temp.rating);
                  this.overallFB[indx].fbchartdt.push(temp.count);
              }
          }
        });
    }
}

openChangePasswordDlg()
{
  this.changePwdDlg=true;
}

changePassword(fg:any)
{
  const value=fg.value;
  this.flag=true;
  this.fbserv.changePassword(this.loggedInUser,value.oldPwd,value.newPwd)
    .subscribe((dt)=>{
      if(dt.success)
          swal({
            title:"Success",
            type:'success',
            text:dt.mesg
          }).then((result)=>{
              this.changePwdDlg=false;
              fg.reset();
              this.flag=false;
          });
        else
            swal({
              title:"Error",
              type:'error',
              text:dt.mesg
            }).then((result)=>{
                fg.reset();
                this.flag=false;
            });
    },(error)=>
    {
      swal({
        title:"Error",
        type:'error',
        text:error
      }).then((result)=>{
          fg.reset();
          this.flag=false;
      });
    });
}
closeChangePwdDlg(fg:any){

  fg.reset();
  this.changePwdDlg=false;
}
}
