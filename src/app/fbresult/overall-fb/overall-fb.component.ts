import { Component, OnInit } from '@angular/core';
import {FbresultService} from '../fbresult.service';
import {Router} from '@angular/router';
import {config} from '../../faculty/facultyconfig';

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
  constructor(private fbserv:FbresultService, private router:Router) { }

  resultDetail(fname)
  {
    console.log("###",fname,this.academicyear,this.dept);
    this.router.navigate(['fbresult/overallfb/fbresultdetail',this.academicyear,this.dept,fname]);

  }
  ngOnInit() {
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
}
