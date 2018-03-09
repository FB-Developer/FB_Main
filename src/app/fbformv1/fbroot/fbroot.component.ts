import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Form, FormArray, Validators } from '@angular/forms';
import { FBroot } from '../fbmodel/fbrootdt';
import { Router } from '@angular/router';
import { FBfetchDtServe } from '../fbfecthdt.serve';
import { FBrequestresult, FBresult, FBrequest } from '../fbmodel/fbresult';
import swal from 'sweetalert2';
@Component({
  selector: 'fbroot',
  templateUrl: './fbroot.component.html',
  styleUrls: ['./fbroot.component.css']
})
export class FbrootComponent implements OnInit {
  public rootFG: FormGroup;
  public rootDt: FBroot;
  confirmMesg:string;
  errorMesg: string;
  debugText: any;
  loggedInUser:string;
  htmlOnError:string;
  constructor(private fb: FormBuilder, private fecthServe: FBfetchDtServe, private route: Router) {}
  ngOnInit() {
    this.getRootDt();
    // this.rootDt=this.getRootDt();
    // this.buildRootFg(this.rootDt);
  }
  private getRootDt() {
    this.debugText = JSON.parse(localStorage.getItem('loggedInUser'));
    console.log('****',this.debugText.userDetail.completed);
    if(this.debugText.userDetail.completed)
    {
      this.errorMesg=this.debugText.userName+', you already Completed your Feedback';
      this.htmlOnError='<a href="/logout">Logout</a>';
      return;
    }
    this.loggedInUser=this.debugText.userName;
    let dt = new FBroot();
    dt.dept = this.debugText.userDetail.dept;
    dt.sem = this.debugText.userDetail.sem;
    dt.class = this.debugText.userDetail.class;
    dt.academicyear = this.debugText.userDetail.academicyear;
    dt.batch = this.debugText.userDetail.batch;
    dt.degree = this.debugText.userDetail.degree;
    this.fecthServe.getRootDt(dt)
      .subscribe((temp) => {
        if (temp.status) {
          this.rootDt = dt;
          const d1: FBroot = temp.mesg;
          this.rootDt.sectionList = d1.sectionList;
          this.buildRootFg(this.rootDt);
        }
        else {
          this.errorMesg = temp.mesg;
        }
      },
      (error) => {
        this.errorMesg = error;
        console.log('****', error);
      }
      );
  }
  private buildRootFg(dt: FBroot) {
    this.rootFG = this.fb.group(
      {
        academicyear: [dt.academicyear],
        batch: [dt.batch],
        dept: [dt.dept],
        sem: [dt.sem],
        class: [dt.class],
        degree: [dt.degree]
        //
        // dept:[dt.dept,Validators.required],
        // sem:[dt.sem,Validators.required],
        // class:[dt.class,Validators.required]
      }
    );
  }
  submitFb(value: FormGroup) {
    swal({
            title: 'Confirm Submit',
            text: 'Really Want to submit?',
            type: 'question',
            showCancelButton:true,
            confirmButtonText: 'Submit',
            cancelButtonText:'Cancel'
          }).then((result)=>{
            if(result.value==true)
            {
              this.parseResult(value);
              swal({
                title:"Success",
                type:'success',
                text:'Submitted Succesfully'
              }).then((result)=>
                  this.route.navigate(['logout'])
            );
        }});
  }
  private parseResult(v1) {
    let academicyear = v1.academicyear;
    let degree = v1.degree;
    let dept = v1.dept;
    let batch = v1.batch;
    let div = v1.class;
    let sem = v1.sem;
    v1.sectionList.map(section => {
      const sec = section.section;
      section.subjectList.map(subject => {
        const subname = subject.subname;
        subject.facultyList.map(faculty => {
          let result = new FBrequestresult();
          result.fbrequest = new FBrequest();
          result.fbresult = new FBresult();
          result.fbrequest.academicyear = academicyear;
          result.fbrequest.degree = degree;
          result.fbrequest.dept = dept;
          result.fbrequest.batch = batch;
          result.fbrequest.class = div;
          result.fbrequest.sem = sem;
          result.fbrequest.subname=subname;
          result.fbrequest.section=sec;
          result.fbrequest.fname = faculty.fname;
          result.fbrequest.fdept = faculty.fdept;
          result.fbresult.rating = faculty.rating;
          result.fbresult.score = faculty.score;

          console.log('****', result);
          this.fecthServe.sendFBresult(result).subscribe(dt => {
            console.log(dt);
            const tempRequest={userId:this.debugText.userId};
            console.log('----',tempRequest);

            this.fecthServe.setCompletedStatus(tempRequest)
              .subscribe((result)=>{
                  if(result.status)
                    console.log('Completed');
                  else
                    this.errorMesg='Something Wrong Updating Completion Status';
              },
              (error)=>{
                  this.errorMesg=error;
              }
              );

          },
            error => {
              this.errorMesg = error;
            }
          )
        });
      });
    });
    // console.log(JSON.stringify(fbresultlist));
  }
}
